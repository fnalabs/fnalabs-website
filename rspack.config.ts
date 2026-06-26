import { join } from 'path'
import {
  DefinePlugin,
  HtmlRspackPlugin,
  ProgressPlugin,
} from '@rspack/core'
import { ReactRefreshRspackPlugin } from '@rspack/plugin-react-refresh'
import { InjectManifest } from '@aaroon/workbox-rspack-plugin'
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack'
import federationConfig from './federationConfig'
import meta from './src/metadata.json'

const HOST = process.env.HOST ?? 'http://localhost:3000';
const ROUTE = process.env.ROUTE ?? '/';

const NODE_ENV = process.env.NODE_ENV || 'production';
const IS_DEV = NODE_ENV === 'development'

const pathRegex = /^\//

const defaultConfig = {
  entry: { main: join(__dirname, './src/index.tsx') },
  resolve: { extensions: ['...', '.ts', '.tsx', '.jsx'] },
  output: {
    name: '[name].[contenthash].js',
    path: join(__dirname, `./dist${ROUTE}`),
    publicPath: `${HOST}${ROUTE}`,
    clean: {
      keep: (path: string) =>
        path.includes('icon_') ||
        path.includes('CNAME') ||
        path.includes('/manifest.json'),
    },
  },
  module: {
    rules: [
      { test: /\.svg$/, type: 'asset' },
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /(node_modules|\.webpack)/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                externalHelpers: true,
                parser: { syntax: 'typescript', tsx: true },
                transform: { react: { runtime: 'automatic', development: IS_DEV, refresh: IS_DEV } },
              },
              env: { targets: [
                'defaults and fully supports es6-module',
              ]},
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ProgressPlugin({}),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.ROUTE': JSON.stringify(ROUTE),
      'process.env.HOST': JSON.stringify(HOST),
    }),
    new ModuleFederationPlugin(federationConfig),
  ],
}

const config = () => {
  if (!IS_DEV) {
    for(const [key, value] of Object.entries(meta)) {
      if (pathRegex.test(key)) {
        defaultConfig.plugins.push(
          new HtmlRspackPlugin({
            template: './index.html',
            filename: `${key === '/' ? '' : `${key.slice(1)}/`}index.html`,
            inject: true,
            publicPath: ROUTE,
            title: value.title,
            meta: {
              description: value.description,
            },
          })
        )
      }
    }
  } else {
    defaultConfig.plugins.push(
      new HtmlRspackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: true,
        publicPath: ROUTE,
        title: meta['/'].title,
        meta: {
          description: meta['/'].description,
        },
      })
    )
  }

  return IS_DEV
    ? {
        ...defaultConfig,
        // NOTE: uncomment when build process is fully supported
        // module: {
        //   ...defaultConfig.module,
        //   rules: [
        //     ...defaultConfig.module.rules,
        //     {
        //       test: /\.scss$/,
        //       use: [
        //         'style-loader',
        //         'css-loader',
        //         'sass-loader',
        //       ],
        //     },
        //   ],
        // },
        devServer: {
          port: 3000,
          historyApiFallback: true,
          static: { directory: join(__dirname, `./dist${ROUTE}`) },
          liveReload: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
          },
        },
        devtool: 'eval',
        plugins: [
          ...defaultConfig.plugins,
          new ReactRefreshRspackPlugin(),
        ],
        watch: true,
      }
    : {
        ...defaultConfig,
        output: { ...defaultConfig.output, path: join(__dirname, `./docs${ROUTE}`) },
        devtool: 'source-map',
        optimization: { minimize: true },
        plugins: [
          ...defaultConfig.plugins,
          new InjectManifest({
            swDest: 'sw.js',
            swSrc: join(__dirname, './src/Worker.ts'),
          }),
        ],
      }
}
export default config
