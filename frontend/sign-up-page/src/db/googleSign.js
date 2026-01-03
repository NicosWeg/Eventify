import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY
);
const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  const { data } = await supabase.auth.getSession();
  if (!data.session) {
    return {success: false, message: 'User not logged'}
  };
  const accessToken = data.session.access_token;

  console.log("JWT:", accessToken);

  const res = await fetch("http://localhost:3000/logIn", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res;
};

export default signInWithGoogle;
