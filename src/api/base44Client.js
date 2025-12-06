import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "6933af8d5ae91cc77f776fb1", 
  requiresAuth: true // Ensure authentication is required for all operations
});
