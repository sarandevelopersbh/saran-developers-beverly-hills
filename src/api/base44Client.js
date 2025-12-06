// src/api/base44Client.js
console.log("⚠️ Base44 SDK mocked: Running in static mode");

export const base44 = {
  // Mock 'entities' for Portfolio/Home
  entities: {
    Project: {
      list: async () => [] 
    }
  },
  // Mock 'collection' for everything else
  collection: (collectionName) => ({
    list: async () => [],
    get: async () => ({}),
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({}),
  }),
  // Mock Auth & Storage
  auth: {
    getUser: async () => null,
    signIn: async () => ({}),
    signOut: async () => {}
  },
  storage: {
    getUrl: () => ""
  }
};
