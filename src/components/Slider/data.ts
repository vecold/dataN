import { CURRENT_ITEM } from '@/biz/constants';
import { APP_TYPE,APP_TYPE_EN } from '@/biz/constants'
const { WC,PDD,DTV,DT } = APP_TYPE_EN;
const { wc,pdd,dtv,dt } = APP_TYPE;
const{ REAL_TIME,HISTORICAL_TREND,USER_DATA,USER_NEW_OLD,REVENUE,AD_RESOURCES } = CURRENT_ITEM
export const menuData = [
    {icon:'#icontrend',title:'应用数据',subMenuInfo:[{title:'实时数据',key:REAL_TIME},{title:'历史趋势',key:HISTORICAL_TREND}]},//我为这个二维数组道歉🧎‍♂️
    {icon:'#iconoperate',title:'用户分析',subMenuInfo:[{title:'用户数据概览',key:USER_DATA},{title:'新老用户',key:USER_NEW_OLD}]},
    {icon:'#iconmoney',title:'收入分析',subMenuInfo:[{title:'收入数据概览',key:REVENUE}]},
    {icon:'#iconyunying',title:'运营效果分析',subMenuInfo:[{title:'广告资源位分析',key:AD_RESOURCES}]}
]
export const appTypeMenu = [
    {title:wc,key:WC},
    {title:pdd,key:PDD},
    {title:dtv,key:DTV},
    {title:dt,key:DT},
]