import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['umi-natur'],
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  webpack5: {},
  natur: {
    service: {},
  },
});
