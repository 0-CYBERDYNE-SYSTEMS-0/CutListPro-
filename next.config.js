module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // replace 'example.com' with the domain of your image source
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};