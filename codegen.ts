import type { CodegenConfig } from '@graphql-codegen/cli';

// check if the args is greater than 3;
let args = process.argv;

let schema;
if (args.length >= 3) {
  schema = args.pop();
  if (schema?.includes('production')) {
    schema = 'https://api-v2.dartroom.xyz/graphql';
  } else if (schema?.includes('beta')) {
    schema = ' https://beta-api.dartroom.xyz/graphql';
  }
}

const config: CodegenConfig = {
  // schema: 'https://api-ams.dartroom.xyz/graphql',
  schema: schema ? schema : 'http://localhost:8080/graphql',
  documents: ['./**/*.gql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './graphql/codegen/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
      plugins: [],
    },
    './graphql/codegen/operation-types.ts': {
      config: {
        withComposition: true,
        pureMagicComment: true,
        scalars: {
          AlgorandAddress: 'string',
          EmailAddress: 'string',
          Uint8Array: 'Uint8Array',
          ObjectId: 'string',
          Timestamp: 'string',
        },
      },
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
  },
};

export default config;
