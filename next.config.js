/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        // appDir:true,
        // serverComponentsExternalPackages: ["mongoose"],
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**', // Match all paths under this hostname
            },

           
        ],
    },

    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        };
        return config;
    }
};

module.exports = nextConfig;
