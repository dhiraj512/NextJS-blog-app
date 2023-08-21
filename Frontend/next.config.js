/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["strapi-blog-backend-dhiraj512.herokuapp.com"],
  },
};

module.exports = nextConfig;
