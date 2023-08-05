/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string
  readonly PUBLIC_SUPABASE_API_KEY: string
  readonly SECRET_DISCORD_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}