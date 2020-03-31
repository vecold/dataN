/**
 * 用户信息
 */
import { api } from '@/public/tools/index.js'

interface getDailySummary {
    type:number,
    begin:string,
    end:string
}
/**
 * 微信的每日uv pv
 */
function getDailySummary( {type=0,begin='',end=''} : getDailySummary )
{
    return new Promise(function(resolve:any,reject:any) {
        api({
            url:'/datan/getDailyRetain',
            params:{
                begin,
                type,
                end
            },
            callback:(res:any)=>{
                resolve(res)
            },
        })
    }); 
}

interface getAppProfit {
    type:string,
    page:number,
    pageSize:number
}

function getAppProfit( {type='wc',page=0,pageSize=5} : getAppProfit )
{
    return new Promise(function(resolve:any,reject:any) {
        api({
            url:'/datan/getAppProfit',
            params:{
                type,
                page,
                pageSize
            },
            callback:(res:any)=>{
                resolve(res)
            },
        })
    }); 
}
export {getDailySummary,getAppProfit}

