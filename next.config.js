/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcPlugins: [["next-superjson-plugin", {}]],
    },
    images: {
        domains: [
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com"
        ]
    },
    env: {
        NEXTAUTH_URL: process.env.DEPLOY_PRIME_URL,
    }
}

module.exports = nextConfig
