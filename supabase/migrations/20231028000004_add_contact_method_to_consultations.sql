-- Add contact_method column to consultations table
ALTER TABLE consultations ADD COLUMN contact_method TEXT;

-- Add comment to the new column
COMMENT ON COLUMN consultations.contact_method IS 'Preferred contact method for the inquiry (email, phone, video call, in-person)';

-- Create index for faster lookups
CREATE INDEX idx_consultations_contact_method ON consultations(contact_method);