-- Create email_subscribers table for email capture
CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT NOT NULL DEFAULT 'unknown',
  subscribed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_subscribers_email ON email_subscribers(email);

-- Create index on source for analytics
CREATE INDEX IF NOT EXISTS idx_email_subscribers_source ON email_subscribers(source);

-- Enable Row Level Security
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy: Anyone can insert (for public signup)
CREATE POLICY "Anyone can subscribe"
  ON email_subscribers
  FOR INSERT
  WITH CHECK (true);

-- Create policy: Only authenticated users can read (for admin dashboard)
CREATE POLICY "Authenticated users can read subscribers"
  ON email_subscribers
  FOR SELECT
  USING (auth.role() = 'authenticated');

COMMENT ON TABLE email_subscribers IS 'Stores email addresses captured from website popups and forms';
COMMENT ON COLUMN email_subscribers.email IS 'Subscriber email address (unique)';
COMMENT ON COLUMN email_subscribers.name IS 'Subscriber name (optional)';
COMMENT ON COLUMN email_subscribers.source IS 'Source of subscription (e.g., exit_intent_popup, footer_form, etc.)';
COMMENT ON COLUMN email_subscribers.subscribed_at IS 'Timestamp when user subscribed';

