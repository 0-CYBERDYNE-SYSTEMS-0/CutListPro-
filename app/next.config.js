module.exports = {
  reactStrictMode: true,
  env: {
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
    STABLE_DIFFUSION_API_KEY: process.env.STABLE_DIFFUSION_API_KEY,
  },
  images: {
    domains: ['example.com'], // replace 'example.com' with the domain of your image source
  },
}