import { CURRENT_ITEM } from '@/biz/constants';
const{ REAL_TIME } = CURRENT_ITEM
export default {
    namespace: 'slider',
    state: {
        collapsed:false,//控制左侧菜单栏
        currentItem:REAL_TIME//当前展示的内容
    },
    reducers: {
		setCollapsed(state:any, action:any) {
			return {...state,collapsed:!state.collapsed};
		},
		setCurrentItem(state:any, action:any) {
			return {...state,currentItem:action.payload};
		},
    },
  };
