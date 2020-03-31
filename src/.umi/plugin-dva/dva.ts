import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
import createLoading from '/Users/luzhengyong/Documents/workspace/react/umiApp/node_modules/dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';

let app = null;

function _onCreate() {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    ...(window.g_useSSR ? { initialState: window.g_initialData } : {}),
  });
  
  app.use(createLoading());
  
  (runtimeDva.plugins || []).forEach(plugin => {
    app.use(plugin);
  });
  app.model({ namespace: 'slider', ...(require('/Users/luzhengyong/Documents/workspace/react/umiApp/src/models/slider.ts').default) });
app.model({ namespace: 'wxinfo', ...(require('/Users/luzhengyong/Documents/workspace/react/umiApp/src/models/wxinfo.ts').default) });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  constructor() {
    super();
    _onCreate();
  }

  componentWillUnmount() {
    const app = getApp();
    app._models.forEach(model => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
