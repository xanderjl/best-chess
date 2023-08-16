import type { Session } from '@auth/core/types'
import { signIn, signOut } from 'auth-astro/client'
import type { Component } from 'solid-js'
import { css } from 'styled-system/css'

interface LoginButtonProps {
  session: Session | null
}

const onClickHandler = (session: Session | null) =>
  session ? signOut() : signIn('discord')

export const LoginButton: Component<LoginButtonProps> = ({ session }) => {
  return (
    <button
      aria-label='button'
      class={css({
        bg: 'purple.500',
        color: 'white',
        px: 4,
        py: 2,
        borderRadius: 'md',
        _hover: {
          bg: 'purple.600'
        }
      })}
      onClick={() => onClickHandler(session)}
    >
      {session ? 'Sign out' : 'Login with Discord'}
    </button>
  )
}
