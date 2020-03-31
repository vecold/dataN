import React,{useState,useEffect} from 'react';
import styles from './index.less';
import { connect } from 'umi';
import { Menu } from 'antd';
import Icon from '@/components/Icon';
const menuData = [
    {icon:'',title:'运营后台'},
    {icon:'',title:'数据分析'},
    {icon:'',title:'应用配置'},
]
export interface Props {
    dispatch: any,
	slider:any
}
function Index({dispatch,slider } : Props) {

	useEffect(()=>{
	},[])

	return (
        <div className='rowV' >
            <div className='centerJC centerAI' style={{backgroundColor:'rgba(31,31,31)',width:48}}>
                <Icon
                    name='#icontoggle'
                    color={'#fff'}
                    font={16}
                    onClick={()=>{
                        dispatch({
                        	type: 'slider/setCollapsed'
                        });
                    }}
                />
            </div>
            <Menu
                defaultSelectedKeys={[menuData[1].title]}
                // defaultOpenKeys={openKeys}
                mode="horizontal"
                theme="dark"
                style={{flex:1}}
            >
                {menuData.map((item)=>{
                    return(
                        <Menu.Item key={item.title} disabled={item.title!='数据分析'}>
                            <span>{item.title}</span>
                        </Menu.Item>
                    )
                })}
            </Menu>
        </div>
	);
}
export default connect(({ slider } : Props) => ({
	slider
}))(Index);