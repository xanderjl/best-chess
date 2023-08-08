/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly SECRET_DISCORD_CLIENT_ID: string
  readonly SECRET_DISCORD_CLIENT_SECRET: string
  readonly SECRET_DATABASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
