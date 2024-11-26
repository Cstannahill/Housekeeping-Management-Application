/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Enable WebAssembly and Layers support
    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
      layers: true, // Enable the layers experiment to resolve the error
    };

    // Add a rule to handle WebAssembly files
    config.module.rules.push({
      test: /\.wasm$/,
      type: "webassembly/async",
    });

    return config;
  },
};

export default nextConfig;
