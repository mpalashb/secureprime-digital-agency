import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { Resend } from "https://esm.sh/resend@2.0.0"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        { 
          status: 405, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      )
    }

    // Parse the request body
    const { name, email, message }: ContactRequest = await req.json()

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, message" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      )
    }

    // Create a Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Insert the contact data into the database
    const { data, error } = await supabase
      .from("contacts")
      .insert({ name, email, message })
      .select()

    if (error) {
      console.error("Error inserting contact data:", error)
      return new Response(
        JSON.stringify({ error: "Failed to submit contact form" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      )
    }

    // Send thank you email using Resend
    try {
      const resendApiKey = Deno.env.get("RESEND_API_KEY")!
      let fromEmail = Deno.env.get("FROM_MY_DOMAIN_EMAIL")
      
      // If fromEmail is not found, use Resend's default email address
      if (!fromEmail) {
        fromEmail = "onboarding@resend.dev"
        console.log("FROM_MY_DOMAIN_EMAIL not found, using Resend's default email:", fromEmail)
      }
      
      const resend = new Resend(resendApiKey)
      
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: "Thank you for contacting SecurePrimedex",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h2 style="color: #333;">Thank You for Contacting SecurePrimedex</h2>
            <p style="color: #555; line-height: 1.6;">Hello ${name},</p>
            <p style="color: #555; line-height: 1.6;">We have received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you as soon as possible.</p>
            <p style="color: #555; line-height: 1.6;">Here's a copy of your message:</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="color: #333; margin: 0;">${message}</p>
            </div>
            <p style="color: #555; line-height: 1.6;">If you have any further questions, please don't hesitate to contact us again.</p>
            <p style="color: #555; line-height: 1.6;">Best regards,<br>The SecurePrimedex Team</p>
          </div>
        `,
      })

      if (emailError) {
        console.error("Error sending thank you email:", emailError)
        // We don't want to fail the whole operation if email sending fails
        // Just log the error and continue with the success response
      }
    } catch (emailError) {
      console.error("Unexpected error sending thank you email:", emailError)
      // Same as above - don't fail the operation
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully",
        data
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    )
  } catch (error) {
    console.error("Unexpected error:", error)
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    )
  }
})