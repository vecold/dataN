import { Plugin } from '/Users/luzhengyong/Documents/workspace/react/umiApp/node_modules/@umijs/runtime/dist/index.js';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','locale','locale','request',],
});
plugin.register({
  apply: require('/Users/luzhengyong/Documents/workspace/react/umiApp/src/.umi/plugin-dva/runtime.tsx'),
  path: '/Users/luzhengyong/Documents/workspace/react/umiApp/src/.umi/plugin-dva/runtime.tsx',
});
plugin.register({
  apply: require('/Users/luzhengyong/Documents/workspace/react/umiApp/node_modules/@umijs/plugin-initial-state/lib/runtime'),
  path: '/Users/luzhengyong/Documents/workspace/react/umiApp/node_modules/@umijs/plugin-initial-state/lib/runtime',
});
plugin.register({
  apply: require('/Users/luzhengyong/Documents/workspace/react/umiApp/src/.umi/plugin-locale/runtime.tsx'),
  path: '/Users/luzhengyong/Documents/workspace/react/umiApp/src/.umi/plugin-locale/runtime.tsx',
});
plugin.register({
  apply: require('/Users/luzhengyong/Documents/workspace/react/umiApp/node_modules/@umijs/plugin-model/lib/runtime'),
  path: '/Users/luzhengyong/Documents/workspace/react/umiApp/node_modules/@umijs/plugin-model/lib/runtime',
});

export { plugin };
