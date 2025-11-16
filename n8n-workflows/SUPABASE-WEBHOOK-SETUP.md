# 🔗 Supabase Database Trigger & Webhook Setup Guide

## Overview

Since n8n doesn't have a native "Supabase Trigger" node, we use a **webhook** approach where Supabase sends HTTP POST requests to n8n whenever a new subscriber is added.

**Flow:**
```
New Row → Supabase DB Trigger → HTTP Request → n8n Webhook → Workflow
```

This provides **instant** notification (typically <1 second) when someone subscribes.

---

## 🎯 Step-by-Step Setup

### Step 1: Get Your n8n Webhook URL

1. Open your n8n instance
2. Import the workflow (`welcome-email-automation.json`)
3. Click on the **"Webhook - New Subscriber"** node
4. You'll see the webhook URL at the top:
   ```
   Production URL: https://your-n8n-instance.com/webhook/email-subscriber-webhook
   Test URL: https://your-n8n-instance.com/webhook-test/email-subscriber-webhook
   ```
5. Copy the **Production URL** (you'll need it in Step 2)

**Note:** The workflow must be **Active** for the production webhook to work.

---

### Step 2: Create Supabase Database Trigger Function

This SQL function will call your n8n webhook whenever a new subscriber is inserted.

1. Open your Supabase project
2. Go to **SQL Editor**
3. Create a new query
4. Paste this SQL code:

```sql
-- ============================================================================
-- Create function to send webhook to n8n when new subscriber is added
-- ============================================================================

-- First, create the function that sends the HTTP request
CREATE OR REPLACE FUNCTION notify_new_subscriber()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'https://your-n8n-instance.com/webhook/email-subscriber-webhook';
  request_id INT;
BEGIN
  -- Send HTTP POST request to n8n webhook
  -- Using pg_net extension (available in Supabase)
  SELECT net.http_post(
    url := webhook_url,
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := jsonb_build_object(
      'type', 'INSERT',
      'table', 'email_subscribers',
      'record', jsonb_build_object(
        'id', NEW.id,
        'email', NEW.email,
        'name', NEW.name,
        'source', NEW.source,
        'subscribed_at', NEW.subscribed_at,
        'created_at', NEW.created_at
      ),
      'old_record', NULL
    )
  ) INTO request_id;

  -- Log the request (optional, for debugging)
  RAISE NOTICE 'Webhook sent for new subscriber: % (request_id: %)', NEW.email, request_id;

  -- Return NEW is required for INSERT triggers
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- Create the trigger that calls the function
-- ============================================================================

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_new_subscriber ON email_subscribers;

-- Create trigger that fires AFTER INSERT
CREATE TRIGGER on_new_subscriber
  AFTER INSERT ON email_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_subscriber();

-- ============================================================================
-- Grant necessary permissions
-- ============================================================================

-- Allow the function to be executed by authenticated users
GRANT EXECUTE ON FUNCTION notify_new_subscriber() TO authenticated;
GRANT EXECUTE ON FUNCTION notify_new_subscriber() TO anon;

-- ============================================================================
-- Test the webhook (optional)
-- ============================================================================

-- Insert a test record to verify webhook is working
-- UNCOMMENT THE LINES BELOW TO TEST:

-- INSERT INTO email_subscribers (email, name, source)
-- VALUES ('test@example.com', 'Test User', 'manual_test');

-- Check if webhook was sent successfully:
-- SELECT * FROM net._http_response ORDER BY created DESC LIMIT 5;
```

4. **IMPORTANT:** Replace `https://your-n8n-instance.com/webhook/email-subscriber-webhook` with your actual n8n webhook URL from Step 1
5. Click **Run** to execute the SQL
6. You should see: `Success. No rows returned`

---

### Step 3: Enable pg_net Extension (If Not Already Enabled)

Supabase uses the `pg_net` extension to make HTTP requests. It's usually enabled by default, but verify:

```sql
-- Check if pg_net is enabled
SELECT * FROM pg_extension WHERE extname = 'pg_net';

-- If not enabled, run this:
CREATE EXTENSION IF NOT EXISTS pg_net;
```

---

### Step 4: Test the Webhook

Now let's test if everything is working:

#### Method 1: Insert via SQL

1. In Supabase SQL Editor:
```sql
INSERT INTO email_subscribers (email, name, source)
VALUES ('your-test-email@example.com', 'Test User', 'manual_test');
```

2. Check n8n executions (should appear within 1-2 seconds)
3. Check your test email inbox

#### Method 2: Insert via Website

1. Go to your website
2. Trigger the email popup
3. Submit your email
4. Check n8n executions
5. Check your inbox

#### Method 3: Test Webhook Directly

You can also test by calling the webhook directly with curl:

```bash
curl -X POST https://your-n8n-instance.com/webhook/email-subscriber-webhook \
  -H "Content-Type: application/json" \
  -d '{
    "type": "INSERT",
    "table": "email_subscribers",
    "record": {
      "id": "test-123",
      "email": "test@example.com",
      "name": "Test User",
      "source": "curl_test",
      "subscribed_at": "2025-01-15T10:00:00Z",
      "created_at": "2025-01-15T10:00:00Z"
    }
  }'
```

---

## 🔍 Verify Setup

### Check Supabase Trigger

```sql
-- List all triggers on email_subscribers table
SELECT 
  trigger_name,
  event_manipulation,
  action_timing,
  action_statement
FROM information_schema.triggers
WHERE event_object_table = 'email_subscribers';
```

You should see:
- `trigger_name`: `on_new_subscriber`
- `event_manipulation`: `INSERT`
- `action_timing`: `AFTER`

### Check Webhook Requests in Supabase

```sql
-- View recent webhook requests
SELECT 
  id,
  status_code,
  error_msg,
  created
FROM net._http_response
ORDER BY created DESC
LIMIT 10;
```

Successful requests show `status_code: 200`.

### Check n8n Executions

1. Go to n8n → **Executions** tab
2. You should see new executions after each insert
3. Click on an execution to see details
4. Verify data was extracted correctly

---

## 🛠️ Troubleshooting

### Issue: Webhook not triggering

**Check 1: Is n8n workflow active?**
```
Solution: Toggle workflow to Active in n8n
```

**Check 2: Is webhook URL correct?**
```sql
-- View the function code to check URL
SELECT prosrc FROM pg_proc WHERE proname = 'notify_new_subscriber';
```
If URL is wrong, re-run the CREATE FUNCTION command with correct URL.

**Check 3: Is pg_net extension installed?**
```sql
SELECT * FROM pg_extension WHERE extname = 'pg_net';
-- If not found, run: CREATE EXTENSION pg_net;
```

**Check 4: Check Supabase logs**
1. Go to Supabase Dashboard → Logs
2. Select "Database"
3. Look for errors related to the trigger

---

### Issue: Webhook returns error

**Check webhook response:**
```sql
SELECT 
  id,
  status_code,
  content,
  error_msg,
  created
FROM net._http_response
ORDER BY created DESC
LIMIT 5;
```

**Common errors:**

| Status Code | Error | Solution |
|-------------|-------|----------|
| 404 | Webhook not found | Check URL, ensure workflow is active |
| 500 | Internal server error | Check n8n logs, verify workflow nodes |
| 401 | Unauthorized | Check if webhook requires authentication |
| Connection refused | Can't reach n8n | Check firewall, DNS, n8n is running |

---

### Issue: Payload format is wrong

If n8n receives the webhook but can't extract data, the payload format might be wrong.

**Debug the payload:**

1. In n8n, click on the "Webhook" node execution
2. Check the `json` tab to see what data was received
3. Adjust the "Extract Subscriber Data" code node if needed

**Example webhook payloads you might receive:**

```javascript
// Format 1: Direct fields
{
  "type": "INSERT",
  "table": "email_subscribers",
  "record": {
    "id": "...",
    "email": "...",
    "name": "..."
  }
}

// Format 2: Nested in 'new' (some webhook services)
{
  "new": {
    "id": "...",
    "email": "...",
    "name": "..."
  }
}

// Format 3: Direct data (rare)
{
  "id": "...",
  "email": "...",
  "name": "..."
}
```

Our code handles all three formats:
```javascript
const subscriber = payload.record || payload.new || payload;
```

---

## 🔐 Security Considerations

### 1. Secure Your Webhook

Add authentication to prevent unauthorized access:

#### Option A: Webhook Authentication in n8n

1. In webhook node, add "Authentication" → "Header Auth"
2. Set header name: `X-Webhook-Secret`
3. Set value: `your-secret-key-here`

Then update Supabase function:
```sql
headers := jsonb_build_object(
  'Content-Type', 'application/json',
  'X-Webhook-Secret', 'your-secret-key-here'
)
```

#### Option B: Use Supabase Edge Function

For more control, create a Supabase Edge Function as middleware:

```typescript
// supabase/functions/notify-subscriber/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { record } = await req.json()
  
  // Call n8n webhook
  const response = await fetch('https://your-n8n.com/webhook/...', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Webhook-Secret': Deno.env.get('N8N_WEBHOOK_SECRET')
    },
    body: JSON.stringify({ record })
  })
  
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

### 2. Whitelist IP Addresses

If your n8n instance supports it, whitelist Supabase IP ranges.

### 3. Monitor for Abuse

```sql
-- Check webhook call frequency
SELECT 
  DATE_TRUNC('hour', created) as hour,
  COUNT(*) as webhook_calls
FROM net._http_response
WHERE created > NOW() - INTERVAL '24 hours'
GROUP BY hour
ORDER BY hour DESC;
```

### 4. Rate Limiting

Add rate limiting to your database trigger:

```sql
CREATE OR REPLACE FUNCTION notify_new_subscriber()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'https://your-n8n-instance.com/webhook/...';
  request_id INT;
  recent_count INT;
BEGIN
  -- Rate limit: Check how many webhooks sent in last minute
  SELECT COUNT(*) INTO recent_count
  FROM net._http_response
  WHERE created > NOW() - INTERVAL '1 minute';
  
  -- Only send if less than 60 in the last minute
  IF recent_count < 60 THEN
    SELECT net.http_post(
      url := webhook_url,
      headers := '{"Content-Type": "application/json"}'::jsonb,
      body := jsonb_build_object('record', row_to_json(NEW))
    ) INTO request_id;
  ELSE
    RAISE WARNING 'Rate limit exceeded, webhook not sent for: %', NEW.email;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## 🚀 Advanced Configuration

### Handle Multiple Events

Want to also handle UPDATE or DELETE events?

```sql
CREATE OR REPLACE FUNCTION notify_subscriber_changes()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'https://your-n8n-instance.com/webhook/subscriber-changes';
  request_id INT;
BEGIN
  SELECT net.http_post(
    url := webhook_url,
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := jsonb_build_object(
      'type', TG_OP,  -- Will be 'INSERT', 'UPDATE', or 'DELETE'
      'table', TG_TABLE_NAME,
      'record', CASE WHEN TG_OP = 'DELETE' THEN row_to_json(OLD) ELSE row_to_json(NEW) END,
      'old_record', CASE WHEN TG_OP = 'UPDATE' THEN row_to_json(OLD) ELSE NULL END
    )
  ) INTO request_id;

  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create triggers for all operations
CREATE TRIGGER on_subscriber_changes
  AFTER INSERT OR UPDATE OR DELETE ON email_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION notify_subscriber_changes();
```

### Retry Failed Webhooks

Add retry logic with exponential backoff:

```sql
CREATE OR REPLACE FUNCTION notify_new_subscriber_with_retry()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'https://your-n8n-instance.com/webhook/...';
  request_id INT;
  response_status INT;
  retry_count INT := 0;
  max_retries INT := 3;
BEGIN
  LOOP
    -- Send webhook
    SELECT net.http_post(
      url := webhook_url,
      headers := '{"Content-Type": "application/json"}'::jsonb,
      body := jsonb_build_object('record', row_to_json(NEW))
    ) INTO request_id;
    
    -- Check response status
    SELECT status_code INTO response_status
    FROM net._http_response
    WHERE id = request_id;
    
    -- Exit if successful
    EXIT WHEN response_status = 200 OR retry_count >= max_retries;
    
    -- Wait before retry (exponential backoff)
    PERFORM pg_sleep(POWER(2, retry_count));
    retry_count := retry_count + 1;
  END LOOP;
  
  IF response_status != 200 THEN
    RAISE WARNING 'Webhook failed after % retries for: %', max_retries, NEW.email;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### Log Webhook Calls

Create a table to track all webhook calls:

```sql
-- Create webhook log table
CREATE TABLE IF NOT EXISTS webhook_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_id UUID REFERENCES email_subscribers(id),
  webhook_url TEXT,
  request_id INT,
  response_status INT,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Modified function with logging
CREATE OR REPLACE FUNCTION notify_new_subscriber_with_logging()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'https://your-n8n-instance.com/webhook/...';
  request_id INT;
  response_status INT;
BEGIN
  -- Send webhook
  SELECT net.http_post(
    url := webhook_url,
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := jsonb_build_object('record', row_to_json(NEW))
  ) INTO request_id;
  
  -- Wait a moment for response
  PERFORM pg_sleep(0.1);
  
  -- Get response status
  SELECT status_code INTO response_status
  FROM net._http_response
  WHERE id = request_id;
  
  -- Log the webhook call
  INSERT INTO webhook_logs (
    subscriber_id,
    webhook_url,
    request_id,
    response_status
  ) VALUES (
    NEW.id,
    webhook_url,
    request_id,
    response_status
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## 📊 Monitoring & Maintenance

### Daily Checks

```sql
-- Check today's webhook success rate
SELECT 
  COUNT(*) as total_webhooks,
  SUM(CASE WHEN status_code = 200 THEN 1 ELSE 0 END) as successful,
  ROUND(100.0 * SUM(CASE WHEN status_code = 200 THEN 1 ELSE 0 END) / COUNT(*), 2) as success_rate
FROM net._http_response
WHERE created > CURRENT_DATE;
```

### Weekly Maintenance

```sql
-- Clean up old webhook responses (keep last 7 days)
DELETE FROM net._http_response
WHERE created < NOW() - INTERVAL '7 days';
```

### Performance Check

```sql
-- Average webhook response time
SELECT 
  AVG(EXTRACT(EPOCH FROM (completed_at - created))) as avg_response_seconds,
  MAX(EXTRACT(EPOCH FROM (completed_at - created))) as max_response_seconds,
  MIN(EXTRACT(EPOCH FROM (completed_at - created))) as min_response_seconds
FROM net._http_response
WHERE created > NOW() - INTERVAL '24 hours';
```

---

## 🆘 Common Issues & Solutions

| Problem | Solution |
|---------|----------|
| Function not found | Re-run CREATE FUNCTION SQL |
| Trigger not firing | Check trigger exists with SELECT query above |
| 404 webhook error | Verify workflow is Active in n8n |
| Slow webhook response | Check n8n server load, optimize workflow |
| Duplicate emails sent | Add unique constraint on email field |
| No emails received | Check n8n execution logs for errors |

---

## 📚 Additional Resources

- [Supabase Database Webhooks](https://supabase.com/docs/guides/database/webhooks)
- [PostgreSQL Triggers](https://www.postgresql.org/docs/current/sql-createtrigger.html)
- [pg_net Extension](https://github.com/supabase/pg_net)
- [n8n Webhook Node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)

---

## ✅ Setup Complete!

Once you've completed all steps:

- [x] n8n webhook URL obtained
- [x] Supabase function created
- [x] Trigger created
- [x] pg_net extension enabled
- [x] Tested successfully
- [x] Workflow activated

Your automation is now live! New subscribers will receive welcome emails within seconds. 🎉

**Questions?** See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) or email support@zerotoai.com

