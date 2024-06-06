/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        API_WEATHER_KEY: process.env.API_WEATHER_KEY,
    }
};

export default nextConfig;
