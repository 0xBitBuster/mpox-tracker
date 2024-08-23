/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    INTERNAL_BACKEND_URL: process.env.NODE_ENV === "development" ? "http://backend:4000/api" : "http://backend:4000/api",
    NEXT_PUBLIC_CLIENT_BACKEND_URL: process.env.NODE_ENV === "development" ? "http://localhost:4000/api" : "https://mpoxvirus.info/api",
    NEXT_PUBLIC_ADSENSE_PUB_ID: "9703598864828139"
  }
};

export default nextConfig;
