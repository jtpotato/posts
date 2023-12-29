/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.RUN_ENV == "dev" ? "" : "/posts",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh7-us.googleusercontent.com",
            }
        ],
        unoptimized: true,
    },
    output: "export"
}

module.exports = nextConfig
