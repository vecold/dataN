import React,{useState,useEffect} from 'react';
import styles from './index.less';
import { connect } from 'umi';
import { Menu,Dropdown } from 'antd';
const { SubMenu } = Menu;
import Icon from '@/components/Icon'
import { APP_TYPE } from '@/biz/constants'
import {menuData,appTypeMenu} from './data'
export interface Props {
    dispatch: any;
    slider: any;
    wxinfo:any
}

function Index({dispatch, slider,wxinfo } : Props) {
    const [ menuState,setMenuState ] = useState({
        openKeys:[menuData[0].title],
        selectedKeys:[menuData[0].subMenuInfo[0].title]
    });
    const { collapsed } = slider;
    const { appType } = wxinfo;
    
    const { openKeys,selectedKeys } = menuState

	useEffect(()=>{

	},[])

    let openChange = (e:any) => {
        setMenuState({...menuState,openKeys:[e.pop()]})
    }
    /**
     * 改变
     * 
     */
    let itemSelect = (e:any) => {
        dispatch({
            type: 'slider/setCurrentItem',
            payload:e.key
        });
    }

    let clickItem = (e:any)=>{
        dispatch({
            type: 'wxinfo/setAppType',
            payload:e.key
        });
    }

    const menu:any = (
        <Menu onClick={clickItem} theme="dark">
            {appTypeMenu.map((item)=>{
                return(
                    <Menu.Item key={item.key}>
                        {item.title}
                    </Menu.Item>
                )
            })}
        </Menu>
      );

	return (
        <div className='colV'>
            <div className={styles.titleV+' rowV centerAI centerJC'}>
                <Icon
                    name={'#iconkeji'}
                    color={'rgba(98,203,250)'}
                    font={36}
                />
                {!collapsed&&
                    <Dropdown overlay={menu}>
                        <span style={{color:'#fff',marginLeft:12}}>{APP_TYPE[appType]}</span>
                    </Dropdown>
                }
            </div>
            <Menu
                defaultSelectedKeys={selectedKeys}
                defaultOpenKeys={openKeys}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                className={styles.slidV}
                onOpenChange={openChange}
                openKeys={openKeys}
                onSelect={itemSelect}
                style={{width:!collapsed?239:92}}
            >
                {menuData.map((item)=>{
                    return(
                        <SubMenu
                            key={item.title}
                            title={
                                <span>
                                    <Icon
                                        name={item.icon}
                                        font={collapsed? 28:18}
                                    />
                                    {!collapsed&&<span style={{marginLeft:12}}>{item.title}</span>}
                                </span>
                            }
                        >
                            {item.subMenuInfo.map((i)=>{
                                return(
                                    <Menu.Item key={i.key}>{i.title}</Menu.Item>
                                )
                            })}
                            
                        </SubMenu>
                    )
                })}
            </Menu>
        </div>
	);
}

export default connect(({ slider,wxinfo } : Props) => ({
    slider,
    wxinfo
}))(Index);