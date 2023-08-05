import client from '@/config/supabase'

const login = () =>
  client.auth.signInWithOAuth({
    provider: 'discord'
  })

export const LoginButton = () => {
  return (
    <button aria-aria-label='button' onClick={() => login()}>
      Login
    </button>
  )
}
