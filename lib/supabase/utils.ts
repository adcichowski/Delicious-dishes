import { supabase } from "./config";

export async function accessToApp({
  typeAccess,
  user,
}: {
  typeAccess: "login" | "register";
  user: { email: string; password: string };
}) {
  const accessFunc = {
    login: await supabase.auth.signIn(user),
    register: await supabase.auth.signUp(user),
  };
  const callToSupabase = accessFunc[typeAccess];
  if (callToSupabase.error?.status !== 200) {
    throw callToSupabase.error?.message;
  }
}
