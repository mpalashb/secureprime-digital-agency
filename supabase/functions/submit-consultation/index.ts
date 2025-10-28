import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { Resend } from "https://esm.sh/resend@2.0.0"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
}

interface ConsultationRequest {
  full_name: string;
  email: string;
  company?: string;
  phone: string;
  service: string;
  consultation_type: string;
  preferred_date?: string;
  preferred_time?: string;
  project_description?: string;
  project_budget?: string;
  project_timeline?: string;
  additional_information?: string;
  form_type?: "consultation" | "inquiry";
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
    const {
      full_name,
      email,
      company,
      phone,
      service,
      consultation_type,
      preferred_date,
      preferred_time,
      project_description,
      project_budget,
      project_timeline,
      additional_information,
      form_type
    }: ConsultationRequest = await req.json()

    // Validate required fields
    if (!full_name || !email || !phone || !service || !consultation_type) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: full_name, email, phone, service, consultation_type"
        }),
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

    // Insert the consultation data into the database
    const { data, error } = await supabase
      .from("consultations")
      .insert({
        full_name,
        email,
        company,
        phone,
        service,
        consultation_type,
        preferred_date: preferred_date || null,
        preferred_time: preferred_time || null,
        project_description: project_description || null,
        project_budget: project_budget || null,
        project_timeline: project_timeline || null,
        additional_information: additional_information || null,
        form_type: form_type || "consultation"
      })
      .select()

    if (error) {
      console.error("Error inserting consultation data:", error)
      return new Response(
        JSON.stringify({ error: "Failed to submit consultation request" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      )
    }

    // Determine form type for email and response
    const isConsultation = !form_type || form_type === "consultation";
    
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
      const emailSubject = isConsultation
        ? "Thank you for requesting a consultation with SecurePrimedex"
        : "Thank you for your project inquiry with SecurePrimedex";
      
      const emailHeading = isConsultation
        ? "Thank You for Requesting a Consultation"
        : "Thank You for Your Project Inquiry";
        
      const emailBodyIntro = isConsultation
        ? `We have received your consultation request and appreciate your interest in SecurePrimedex. Our team will review your request and get back to you shortly to confirm your appointment.`
        : `We have received your project inquiry and appreciate your interest in SecurePrimedex. Our team will review your project details and get back to you within 24 hours to discuss how we can help bring your vision to life.`;
        
      const detailsHeading = isConsultation
        ? "Consultation Details:"
        : "Project Inquiry Details:";
        
      const emailClosing = isConsultation
        ? `If you need to make any changes to your request, please don't hesitate to contact us.`
        : `We're excited about the possibility of working together and will be in touch soon to discuss the next steps.`;

      const { data: emailData, error: emailError } = await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: emailSubject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h2 style="color: #333;">${emailHeading}</h2>
            <p style="color: #555; line-height: 1.6;">Hello ${full_name},</p>
            <p style="color: #555; line-height: 1.6;">${emailBodyIntro}</p>
            
            <h3 style="color: #333; margin-top: 25px;">${detailsHeading}</h3>
            <ul style="color: #555; line-height: 1.6;">
              <li><strong>Service:</strong> ${service}</li>
              ${isConsultation ? `<li><strong>Consultation Type:</strong> ${consultation_type}</li>` : ''}
              ${preferred_date ? `<li><strong>Preferred Date:</strong> ${preferred_date}</li>` : ''}
              ${preferred_time ? `<li><strong>Preferred Time:</strong> ${preferred_time}</li>` : ''}
              ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
              ${project_description ? `<li><strong>Project Description:</strong> ${project_description}</li>` : ''}
              ${project_budget ? `<li><strong>Project Budget:</strong> ${project_budget}</li>` : ''}
              ${project_timeline ? `<li><strong>Project Timeline:</strong> ${project_timeline}</li>` : ''}
              ${additional_information ? `<li><strong>Additional Information:</strong> ${additional_information}</li>` : ''}
            </ul>
            
            <p style="color: #555; line-height: 1.6;">${emailClosing}</p>
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
    const successMessage = isConsultation
      ? "Consultation request submitted successfully"
      : "Project inquiry submitted successfully";
      
    return new Response(
      JSON.stringify({
        success: true,
        message: successMessage,
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