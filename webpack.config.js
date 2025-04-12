const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    // Fix for Expo Router's issue resolving 'app' directory on Windows
    config.resolve.alias = {
        ...(config.resolve.alias || {}),
        app: require('path').resolve(__dirname, 'app'),
    };

    return config;
};
