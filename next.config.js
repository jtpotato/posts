/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/posts",
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
