/**
 * 存放微信相关数据分析
 * hooks 管页面渲染
 * redux 现在用的是dva的store 都放数据，开始分离
 */
import { getDailySummary,getAppProfit } from '@/biz/wxInfo';
import {APP_TYPE_EN} from '@/biz/constants';
export interface Props {
    payload: any;
    put: any;
    call: any;
}
export default {
    namespace: 'wxinfo',
    state: {
        appProfit:{
            data:[],
            total:0
        },
        appType:APP_TYPE_EN.WC
    },
    reducers: {
        setAppProfit(state:any, params:any) {
            return {...state, appProfit:params.payload};
        },
        setAppType(state:any, params:any) {
            return {...state, appType:params.payload};
        },
       
    },
    effects: {
        *getDailySummary({ payload } : Props, { put, call } : Props) {
            const { type,begin,end } = payload;
            const res = yield call(getDailySummary, {type,begin,end});
            // yield [call(api.getContent, params), call(api.getBrands, params), call(api.getDate)];//一个类似于promiseAll的方法
        },
        *getAppProfit({ payload } : Props, { put, call } : Props) {
            const res = yield call(getAppProfit, {...payload});
            yield put({ type: 'setAppProfit', payload: res});
            // yield [call(api.getContent, params), call(api.getBrands, params), call(api.getDate)];//一个类似于promiseAll的方法
        },
    },
  };
