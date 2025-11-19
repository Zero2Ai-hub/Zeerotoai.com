-- =====================================================
-- FIX: Row Level Security Policies
-- Issue: INSERT policies blocking anonymous requests
-- =====================================================

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit workflow request" ON workflow_requests;

-- Recreate policies with correct permissions
-- Policy: Allow anyone to insert contact form (anonymous + authenticated)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Allow anyone to insert workflow request (anonymous + authenticated)
CREATE POLICY "Anyone can submit workflow request"
  ON workflow_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Verify policies are active
SELECT schemaname, tablename, policyname, permissive, roles, cmd
FROM pg_policies
WHERE tablename IN ('contact_submissions', 'workflow_requests');

