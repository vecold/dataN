import { createMemoryHistory, createHashHistory, createBrowserHistory } from '/Users/luzhengyong/Documents/workspace/react/umiApp/node_modules/@umijs/runtime/dist/index.js';

let options = {
  "basename": "/"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

let history = createHashHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createHashHistory(options);
  }

  return history;
};

// 通常仅微前端场景需要调用这个 API
export const setCreateHistoryOptions = (newOpts: any = {}) => {
  options = { ...options, newOpts };
}

export { history };
