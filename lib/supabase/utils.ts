import { supabase } from "./config";

export async function accessToApp({
  typeAccess,
  user,
}: {
  typeAccess: "login" | "register";
  user: { email: string; password: string };
}) {
  try {
    if (typeAccess === "login") await supabase.auth.signIn(user);
    if (typeAccess === "register") await supabase.auth.signUp(user);
  } catch ({ message }) {
    throw Error(
      typeof message === "string" ? message : "Problem with access to database"
    );
  }
}
