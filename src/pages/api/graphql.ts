import type { APIRoute } from 'astro'
import { createYoga } from 'graphql-yoga'

import { schema } from '@/config/pothos/schema'

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
})

export const get: APIRoute = async ({ request }) => {
  return handleRequest(request, {})
}

export const post = get
