import supabase from "./supabase";

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

  return {token: accessToken};
};

export default signInWithGoogle;
