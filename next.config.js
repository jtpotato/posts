/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/posts",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh7-us.googleusercontent.com",
            }
        ]
    }
}

module.exports = nextConfig
