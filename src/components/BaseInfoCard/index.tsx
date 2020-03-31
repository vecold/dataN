import React,{useState,useEffect} from 'react';
import styles from './index.less'
import { connect } from 'umi';
import { DATA_TYPE } from '@/biz/constants'
const { WX_DATA_DAYLY } = DATA_TYPE;
/**
 * 数据小卡片通用样式
 */
export interface Props {
    dispatch: any;
	wxinfo: any;
	type:string
}

function Index({dispatch, wxinfo,type } : Props) {

	useEffect(()=>{
		switch(type){
		case WX_DATA_DAYLY:
			dispatch({
				type: 'wxinfo/getDailySummary',
				payload:{
					
				}
			});
			break;
		}
	},[])
	
	return (
		<div className={styles.cardMinoi}>
		</div>
	);
}


export default connect(({ wxinfo } : Props) => ({
    wxinfo,
}))(Index);