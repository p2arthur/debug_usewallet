const version = "0.5.3"

const envDevelopment = {
  RELEASE: "Alpha",
  VERSION: version,
  LEDGER: "TestNet",
  DARTROOM_HOST: "localhost:3000",
  DARTROOM_API_BASE: "http://localhost:3002",
  DARTROOM_API: "http://localhost:3002/graphql",
  DARTROOM_WS: "ws://localhost:3002/graphql",
  FILEROOM_API: "https://beta-ams-0.fileroom.app",
  FILEROOM_WS: "wss://beta-ams-0.fileroom.app",
  QUEUE: "https://queue-1.fileroom.app",
  FILEROOM_CDN: "https://beta-cdn.fileroom.app",
  FILEROOM_ENV: "beta"
}

// Beta
const envProduction = {
  RELEASE: "Beta",
  VERSION: version,
  LEDGER: "TestNet",
  DARTROOM_HOST: "beta.dartroom.xyz",
  DARTROOM_API_BASE: "https://beta-api.dartroom.xyz",
  DARTROOM_API: "https://beta-api.dartroom.xyz/graphql",
  DARTROOM_WS: "wss://beta-api.dartroom.xyz/graphql",
  FILEROOM_API: "https://beta-ams-0.fileroom.app",
  FILEROOM_WS: "wss://beta-ams-0.fileroom.app",
  QUEUE: "https://queue-1.fileroom.app",
  FILEROOM_CDN: "https://beta-cdn.fileroom.app",
  FILEROOM_ENV: "beta"
}

// Production
// const envProduction = {
//   RELEASE: "Beta",
//   VERSION: version,
//   LEDGER: "MainNet",
//   DARTROOM_HOST: "v2.dartroom.xyz",
//   DARTROOM_API_BASE: "https://api-v2.dartroom.xyz",
//   DARTROOM_API: "https://api-v2.dartroom.xyz/graphql",
//   DARTROOM_WS: "wss://api-v2.dartroom.xyz/graphql",
//   FILEROOM_API: "https://api.fileroom.app",
//   FILEROOM_WS: "wss://api.fileroom.app",
//   QUEUE: "https://queue-1.fileroom.app",
//   FILEROOM_CDN: "https://cdn.fileroom.app"
// }

export const env = process.dev ? envDevelopment : envProduction

export default env