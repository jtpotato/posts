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
    },
    output: "export"
}

module.exports = nextConfig
