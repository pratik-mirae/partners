/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL
    },
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL
};

export default nextConfig;
