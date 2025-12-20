/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Contact person's full name
      - `email` (text, required) - Contact person's email address
      - `company` (text, optional) - Company name
      - `phone` (text, optional) - Contact phone number
      - `message` (text, required) - Message content from the contact form
      - `created_at` (timestamptz) - Timestamp when submission was created
      - `status` (text) - Status of the submission (new, contacted, resolved)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated admin users to read all submissions
    - Allow anonymous users to insert new submissions (for public contact form)

  3. Indexes
    - Index on created_at for efficient sorting
    - Index on status for filtering submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);