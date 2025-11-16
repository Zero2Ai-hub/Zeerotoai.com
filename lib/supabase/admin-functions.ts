/**
 * Admin functions that call Supabase Edge Functions
 * These require the SUPABASE_ADMIN_TOKEN env variable
 */

// Construct the Edge Functions URL from the Supabase URL
// Example: https://fotnhzqbkrglitljeial.supabase.co/functions/v1
function getEdgeFunctionUrl(): string {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  
  // Remove /rest/v1 or any trailing path and add /functions/v1
  const baseUrl = supabaseUrl.split('/rest/v1')[0];
  return `${baseUrl}/functions/v1`;
}

const EDGE_FUNCTION_URL = getEdgeFunctionUrl();
const ADMIN_TOKEN = process.env.SUPABASE_ADMIN_TOKEN || '';

/**
 * Get the total number of registered users
 * Calls the admin-user-count Edge Function
 */
export async function getTotalUserCount(): Promise<number> {
  try {
    if (!ADMIN_TOKEN) {
      console.warn('SUPABASE_ADMIN_TOKEN not set, returning 0');
      return 0;
    }

    const url = `${EDGE_FUNCTION_URL}/admin-user-count`;
    
    const response = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${ADMIN_TOKEN}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // Always fetch fresh count
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch user count:', response.status, url);
      return 0;
    }

    const data = await response.json();
    return data.total_users || 0;
  } catch (error) {
    console.error('Error fetching user count:', error);
    return 0;
  }
}

/**
 * Get the member number for a specific user based on their signup date
 * Calls the admin-user-count Edge Function with the user's created_at timestamp
 * @param userId - The user's ID
 * @param userCreatedAt - The user's created_at timestamp
 */
export async function getMemberNumber(userId: string, userCreatedAt: string): Promise<number> {
  try {
    if (!ADMIN_TOKEN) {
      console.warn('SUPABASE_ADMIN_TOKEN not set, returning fallback number');
      return calculateFallbackMemberNumber(userCreatedAt);
    }

    const url = `${EDGE_FUNCTION_URL}/admin-user-count`;
    
    const response = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ADMIN_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          user_id: userId,
          created_at: userCreatedAt 
        }),
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch member number:', response.status);
      return calculateFallbackMemberNumber(userCreatedAt);
    }

    const data = await response.json();
    return data.member_number || calculateFallbackMemberNumber(userCreatedAt);
  } catch (error) {
    console.error('Error fetching member number:', error);
    return calculateFallbackMemberNumber(userCreatedAt);
  }
}

/**
 * Fallback: Calculate a deterministic member number based on timestamp
 */
function calculateFallbackMemberNumber(userCreatedAt: string): number {
  const timestamp = new Date(userCreatedAt).getTime();
  const hash = timestamp.toString().split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return (hash % 100) + 1;
}

