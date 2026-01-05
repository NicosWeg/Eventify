import { createClient } from "@supabase/supabase-js";
import { config } from "./env.js";


// DB Client Creation
export const supabase = createClient(
  config.supabase_url, config.supabase_service_role_key
);
