module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Ensures Strapi listens on all available interfaces
  port: env.int('PORT', process.env.PORT || 1337), // Dynamically sets the port
  url: env('PUBLIC_URL', 'https://pizza47-fdb3h37h8-ishugoel21s-projects.vercel.app'), // Your public URL
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  proxy: true, // Optional: usually used for reverse proxies like Azure
});
