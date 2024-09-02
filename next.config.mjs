// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React Strict Mode for better development practices

  images: {
    domains: ["prod-files-secure.s3.us-west-2.amazonaws.com"], // Replace with your actual domain for images from Notion or other sources
  },

  // You can add more configurations here as needed
};

export default nextConfig;
