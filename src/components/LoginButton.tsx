import { signIn } from 'auth-astro/client'
import type { Component, ComponentProps } from 'solid-js'
import { css } from 'styled-system/css'

import { Discord } from '@/components/icons'

export const LoginButton: Component<ComponentProps<'button'>> = props => {
  return (
    <button
      aria-label='button'
      class={css({
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        bg: 'purple.500',
        color: 'white',
        px: 4,
        py: 2,
        borderRadius: 'md',
        _hover: {
          bg: 'purple.600'
        }
      })}
      onClick={() => signIn('discord')}
      {...props}
    >
      <Discord />
      Login with Discord
    </button>
  )
}
