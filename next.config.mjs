import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'template',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Component': './src/pages/index.tsx',
        },
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      }),
    );

    // Adicione regras para processar CSS e CSS Modules
    config.module.rules.push(
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    );

    // Adicione alias para o pacote, se necessário
    config.resolve.alias = {
      ...config.resolve.alias,
      '@bee2pay/ui-components': path.resolve(
        __dirname,
        'node_modules/@bee2pay/ui-components/dist/ui-components.esm.js',
      ),
      '@bee2pay/ui-components/tailwindcss': path.resolve(
        __dirname,
        'node_modules/@bee2pay/ui-components/dist/tailwind.css',
      ),
      '@bee2pay/icons': path.resolve(
        __dirname,
        'node_modules/@bee2pay/icons/dist/bee2pay-icons.esm.js',
      ),
      '@bee2pay/utils': path.resolve(
        __dirname,
        'node_modules/@bee2pay/utils/dist/utils.esm.js',
      ),
    };

    return config;
  },
};

export default nextConfig;
