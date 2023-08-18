import type { CodegenConfig } from '@graphql-codegen/cli'
import { printSchema } from 'graphql'

import { schema } from './pothos.schema'

const config: CodegenConfig = {
  overwrite: true,
  schema: printSchema(schema),
  documents: ['src/**/*.graphql'],
  generates: {
    './src/gql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-document-nodes'
      ]
    }
  }
}

export default config
