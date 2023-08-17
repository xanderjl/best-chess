import { signOut } from 'auth-astro/client'
import type { Component, ComponentProps } from 'solid-js'
import { css } from 'styled-system/css'

export const SignOutButton: Component<ComponentProps<'button'>> = props => (
  <button
    aria-label='signout button'
    class={css({
      bg: 'gray.500',
      px: 4,
      py: 2,
      borderRadius: 'md'
    })}
    onClick={() => signOut()}
    {...props}
  >
    Sign Out
  </button>
)
