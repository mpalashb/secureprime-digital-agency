-- Add form_type column to consultations table
ALTER TABLE consultations ADD COLUMN form_type TEXT;

-- Add comment to the new column
COMMENT ON COLUMN consultations.form_type IS 'Type of form submission: consultation or inquiry';

-- Create index for faster lookups
CREATE INDEX idx_consultations_form_type ON consultations(form_type);