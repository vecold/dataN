/**
 * 表格列名
 */
import { APP_TYPE } from '@/biz/constants';
export const dataType = {
    DATE:'produce_time',
    APPTYPE:'type',
    MONEY:'money',
    ORDERNUM:'order_num',
    NEWRATE:'new_rate',
    OLDRATE:'old_rate',
    UNIT:'unit_price',
    PAYPN:'pay_pnumber'
}
export const {
    DATE,
    APPTYPE,
    MONEY,
    ORDERNUM,
    NEWRATE,
    OLDRATE,
    UNIT,
    PAYPN
} = dataType

/**
 * 对值进行转换 我的心好痛【= =
 * @param key 
 * @param value 
 */
const changeValue = (key:string,value:any)=>{
	let finValue = value;
	switch(key){
		case DATE:
			finValue = value.substr(0,4) + '-' + value.substr(4,2) + '-' + value.substr(6,2);
			break;
		case APPTYPE:
			finValue =	APP_TYPE[value];
			break;
		case UNIT:
		case MONEY:
			finValue = value/100;
			break;	
		case NEWRATE:
		case OLDRATE:
			finValue = value/100 + '%';
			break;
		default:
			break;
	}
	return finValue;
}

export const tableCloumns = [
    {
        title: '日期',
        dataIndex: DATE,
        key: DATE,
        render: (text: any) => changeValue(DATE,text),
    },
    {
        title: 'app',
        dataIndex: APPTYPE,
        key: APPTYPE,
        render: (text: any) => changeValue(APPTYPE,text),
    },
    {
        title: '金额',
        dataIndex: MONEY,
        key: MONEY,
        render: (text: any) => changeValue(MONEY,text),
    },
    {
        title: '订单数',
        dataIndex: ORDERNUM,
        key: ORDERNUM,
    },
    {
        title: '新订率',
        dataIndex: NEWRATE,
        key: NEWRATE,
        render: (text: any) => changeValue(NEWRATE,text),
    }, 
    {
        title: '复订率',
        dataIndex: OLDRATE,
        key: OLDRATE,
        render: (text: any) => changeValue(OLDRATE,text),
    },
    {
        title: '客单价',
        dataIndex: UNIT,
        key: UNIT,
        render: (text: any) => changeValue(UNIT,text),
    },
    {
        title: '订购人数',
        dataIndex: PAYPN,
        key: PAYPN,
    },
]