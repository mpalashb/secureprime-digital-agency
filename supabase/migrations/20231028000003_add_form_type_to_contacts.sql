-- Add form_type column to contacts table
ALTER TABLE contacts ADD COLUMN form_type TEXT;

-- Add comment to the new column
COMMENT ON COLUMN contacts.form_type IS 'Type of form submission: contact';

-- Create index for faster lookups
CREATE INDEX idx_contacts_form_type ON contacts(form_type);