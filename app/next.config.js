module.exports = {
  reactStrictMode: true,
  env: {
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
    HOME_DEPOT_API_KEY: process.env.HOME_DEPOT_API_KEY,
    STABLE_DIFFUSION_API_KEY: process.env.STABLE_DIFFUSION_API_KEY,
  },
  images: {
    domains: ['images.homedepot-static.com'],
  },
}