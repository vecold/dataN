import React,{useState,useEffect} from 'react';
import styles from './index.less';
import { Button,Table,Pagination } from 'antd';
import { connect } from 'umi';
import {tableCloumns} from './data/index';
interface Props {
    dispatch: any;
    wxinfo: any;
}


function Index({ dispatch,wxinfo } : Props) {
	const { appProfit,loading,appType } = wxinfo;
	const [page,setPage] =  useState<number>(0)

	useEffect(()=>{
		getData()
	},[page])

	let getData = () => {
		dispatch({
            type: 'wxinfo/getAppProfit',
            payload:{
				type:appType,
				page:page,
			}
        });
	}

	let pageChange = (e:any) => {
		if(loading)return;
		setPage(e-1);//逻辑上从0开始
	}
	
	return(
		<div className='colV' style={{flex:1}}>
			<div className={styles.g2TaV}>
				<h1>一个趋势图</h1>
			</div>
			<Table 
				dataSource={appProfit.data} 
				columns={tableCloumns}
				className = {styles.tableV}
				tableLayout = {'fixed'}
				pagination = {false}
				rowKey = {(e)=>e.id}
			/>
			<Pagination
				simple
				pageSize ={5}
				total={appProfit.total}
				className={styles.pationV}
				onChange = {pageChange}
				current={page+1}
			/>
		</div>
	);
}
export default connect(({ wxinfo } : Props) => ({
    wxinfo,
}))(Index);