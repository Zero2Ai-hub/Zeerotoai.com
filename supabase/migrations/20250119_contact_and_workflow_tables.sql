-- =====================================================
-- MIGRATION: Contact Form & Workflow Requests
-- Replace Airtable with Supabase for all form submissions
-- =====================================================

-- =====================================================
-- 1. CONTACT SUBMISSIONS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  ip_address TEXT,
  user_agent TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (for public contact form)
-- Note: Must specify TO anon, authenticated for public access
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can read (for admin dashboard)
CREATE POLICY "Authenticated users can read contacts"
  ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can update (for status changes)
CREATE POLICY "Authenticated users can update contacts"
  ON contact_submissions
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Add comments for documentation
COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from the website';
COMMENT ON COLUMN contact_submissions.name IS 'Contact person name';
COMMENT ON COLUMN contact_submissions.email IS 'Contact email address';
COMMENT ON COLUMN contact_submissions.company IS 'Company name (optional)';
COMMENT ON COLUMN contact_submissions.message IS 'Contact message/inquiry';
COMMENT ON COLUMN contact_submissions.status IS 'Status: new, contacted, closed';
COMMENT ON COLUMN contact_submissions.ip_address IS 'Client IP address (for spam prevention)';
COMMENT ON COLUMN contact_submissions.user_agent IS 'Client user agent (for analytics)';

-- =====================================================
-- 2. WORKFLOW REQUESTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS workflow_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  service_type TEXT NOT NULL,
  business TEXT NOT NULL,
  project_details TEXT NOT NULL,
  timeline TEXT,
  budget_range TEXT,
  source TEXT NOT NULL DEFAULT 'website',
  status TEXT NOT NULL DEFAULT 'pending',
  ip_address TEXT,
  user_agent TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_workflow_requests_email ON workflow_requests(email);
CREATE INDEX IF NOT EXISTS idx_workflow_requests_status ON workflow_requests(status);
CREATE INDEX IF NOT EXISTS idx_workflow_requests_service_type ON workflow_requests(service_type);
CREATE INDEX IF NOT EXISTS idx_workflow_requests_submitted_at ON workflow_requests(submitted_at DESC);

-- Enable Row Level Security
ALTER TABLE workflow_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (for public workflow request form)
-- Note: Must specify TO anon, authenticated for public access
CREATE POLICY "Anyone can submit workflow request"
  ON workflow_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can read (for admin dashboard)
CREATE POLICY "Authenticated users can read workflow requests"
  ON workflow_requests
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can update (for status changes)
CREATE POLICY "Authenticated users can update workflow requests"
  ON workflow_requests
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Add comments for documentation
COMMENT ON TABLE workflow_requests IS 'Stores workflow automation requests from the website';
COMMENT ON COLUMN workflow_requests.name IS 'Client name';
COMMENT ON COLUMN workflow_requests.email IS 'Client email address';
COMMENT ON COLUMN workflow_requests.service_type IS 'Type of automation service requested';
COMMENT ON COLUMN workflow_requests.business IS 'Business or industry type';
COMMENT ON COLUMN workflow_requests.project_details IS 'Detailed project requirements';
COMMENT ON COLUMN workflow_requests.timeline IS 'Expected project timeline';
COMMENT ON COLUMN workflow_requests.budget_range IS 'Client budget range';
COMMENT ON COLUMN workflow_requests.source IS 'Source of request: website, dashboard, etc.';
COMMENT ON COLUMN workflow_requests.status IS 'Status: pending, in_progress, completed, cancelled';

-- =====================================================
-- 3. UPDATED_AT TRIGGER (Auto-update timestamps)
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to contact_submissions
CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to workflow_requests
CREATE TRIGGER update_workflow_requests_updated_at
  BEFORE UPDATE ON workflow_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- 4. HELPFUL VIEWS FOR ANALYTICS (Optional but useful)
-- =====================================================

-- View: Recent contact submissions
CREATE OR REPLACE VIEW recent_contacts AS
SELECT 
  id,
  name,
  email,
  company,
  LEFT(message, 100) || '...' AS message_preview,
  status,
  submitted_at
FROM contact_submissions
ORDER BY submitted_at DESC
LIMIT 50;

-- View: Pending workflow requests
CREATE OR REPLACE VIEW pending_workflows AS
SELECT 
  id,
  name,
  email,
  service_type,
  business,
  LEFT(project_details, 100) || '...' AS details_preview,
  timeline,
  budget_range,
  submitted_at
FROM workflow_requests
WHERE status = 'pending'
ORDER BY submitted_at DESC;

-- Grant access to views for authenticated users
GRANT SELECT ON recent_contacts TO authenticated;
GRANT SELECT ON pending_workflows TO authenticated;

COMMENT ON VIEW recent_contacts IS 'Shows the 50 most recent contact form submissions';
COMMENT ON VIEW pending_workflows IS 'Shows all pending workflow requests';

