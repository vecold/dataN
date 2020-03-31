import React,{useState,useEffect} from 'react';
import styles from './index.less';
import Slider from '@/components/Slider';
import Header from '@/components/Header';
import Content from '@/components/Content';
import '@/public/tools/symbol.js';
function Index()  {
	
	useEffect(()=>{
		
	},[])
	
	return(
		<div className={styles.mainpage}>
			<div className={styles.rowV} style={{flex:1}}>
				<Slider/>
				<div className={styles.colV} style={{flex:1}}>
					<Header/>
					<Content/>
				</div>
			</div>
		</div>
	);
}

export default Index;