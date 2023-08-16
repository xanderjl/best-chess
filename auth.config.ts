import Discord from '@auth/core/providers/discord';
// import { loadEnv } from 'vite'

// const { SECRET_DISCORD_CLIENT_ID, SECRET_DISCORD_CLIENT_SECRET, SECRET_AUTH_SECRET } = loadEnv(import.meta.env.MODE, process.cwd(), '')

const { SECRET_DISCORD_CLIENT_ID, SECRET_DISCORD_CLIENT_SECRET, SECRET_AUTH_SECRET } = import.meta.env

const config = {
  providers: [
    Discord({
      clientId: SECRET_DISCORD_CLIENT_ID,
      clientSecret: SECRET_DISCORD_CLIENT_SECRET,
    }),
  ],
  secret: SECRET_AUTH_SECRET,
  trustHost: true
}

export default config