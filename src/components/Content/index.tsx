import React,{useState,useEffect} from 'react';
import styles from './index.less';
import RevenueData from '@/pages/revenueData';
import { connect } from 'umi';
export interface Props {
    dispatch: any;
    slider: any;
}
function Index({ dispatch,slider } : Props) {
    const { currentItem } = slider;
	useEffect(()=>{
    },[])
    const [type, setStyle] = useState<string>('noData')
    /**
     * 枚举条件渲染,对应值参考biz
     * 变量控制问题有以下解法，但是不是一个优雅的写法所以放弃
        interface json {
            [key:string]:any
        }
        let  REAL_TIME = '123';
        let json:json = {} 
        json[REAL_TIME] = '';
     */
    const CONTENT_STATES:any = ()=>({
        REAL_TIME:<div>123</div>,
        HISTORICAL_TREND: <div>456</div>,
        USER_DATA: <div>789</div>,
        USER_NEW_OLD: <div>789</div>,
        REVENUE: <RevenueData/>,
        AD_RESOURCES: <div>789</div>,
    });

	return (
        <div className={styles.mainContect+' rowV'} style={{flex:1}}>
            {CONTENT_STATES()[currentItem]}
        </div>
    );
    
}

export default connect(({ slider } : Props) => ({
    slider,
}))(Index);