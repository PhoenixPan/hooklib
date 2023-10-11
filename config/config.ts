import { menus } from './hooks';

export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  publicPath: '/phoenixpan-lib/',
  history: { type: 'hash' },
  // 用来实现按需加载的插件
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: 'Phoenix custom hooks',
  favicon: '/avatar.png',
  logo: '/logo.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  alias: {
    phoenixPanHooks: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    { title: 'Docs', path: '/docs' },
    { title: 'Hooks', path: '/hooks' },
  ],
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/docs': [
      {
        title: 'Docs',
        path: '/docs',
      },
    ],
    '/hooks': menus,
  },
};
