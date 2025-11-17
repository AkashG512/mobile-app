import { Redirect } from "expo-router";

/**
 * Root index screen - redirects to login
 * You can add authentication check logic here
 */
export default function Index() {
  // Redirect to login screen to start the flow
  // TODO: Add authentication check - if already logged in, redirect to tabs
  return <Redirect href="/(auth)/login" />;
}
