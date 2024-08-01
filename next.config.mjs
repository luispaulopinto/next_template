import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

// // Função para gerar configuração 'shared'
// async function getSharedDependencies() {
//   const packageJson = await import('./package.json', {
//     assert: { type: 'json' },
//   });

//   const dependencies = packageJson.dependencies || {};

//   // Configuração padrão para compartilhamento de dependências
//   const sharedConfig = Object.keys(dependencies).reduce((acc, dep) => {
//     acc[dep] = { singleton: true, requiredVersion: dependencies[dep] };
//     return acc;
//   }, {});

//   // Configurações específicas para bibliotecas críticas
//   sharedConfig.next = {
//     singleton: true,
//     requiredVersion: dependencies.next,
//   };
//   sharedConfig.react = {
//     singleton: true,
//     requiredVersion: dependencies.react,
//   };
//   sharedConfig['@bee2pay/ui-components'] = {
//     singleton: true,
//     requiredVersion: dependencies['@bee2pay/ui-components'],
//   };

//   // Adicione ou modifique configurações para outras bibliotecas conforme necessário
//   // sharedConfig.someLibrary = { singleton: true, requiredVersion: 'x.x.x' };

//   return sharedConfig;
// }

// const sharedDependencies = await getSharedDependencies();

/* eslint-disable-next-line no-underscore-dangle */
const __filename = fileURLToPath(import.meta.url);
/* eslint-disable-next-line no-underscore-dangle */
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'sidebar',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Template': './src/pages/index.tsx',
          './SideBar': './src/pages/sidebar.tsx',
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
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      '@bee2pay/ui-components': path.resolve(
        __dirname,
        'node_modules/@bee2pay/ui-components/dist/ui-components.esm.js',
      ),
      // '@bee2pay/ui-components/tailwindcss': path.resolve(
      //   __dirname,
      //   'node_modules/@bee2pay/ui-components/dist/tailwind.css',
      // ),
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
