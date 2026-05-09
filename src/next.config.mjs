/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: process.env.NODE_ENV === 'production' ? "../docs" : ".next",
};

export default nextConfig;
