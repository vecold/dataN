/**
 * 想做成submodule还是不写成ts了
 */
import fetch from 'dva/fetch';
import { DOMAIN_TYPE } from '@/biz/constants'
import {
    DeAes2,
    Encrypt,
    productionToken
} from '../lib/Secret.js'
import { showLoding,hideLoding } from '@/components/showLoading/index'
/**
 * 请求远参数
 */
function api({
    host = DOMAIN_TYPE.ZHOST,
    url,
    method = 'POST',
    params = {},
    callback,
    errorcallback
}) {
    params.rd_session = local({ type: 'get', key: 'rd_session' });
    
    //请求参数转为JSON字符串
    var jsonStr = JSON.stringify(params)
    //根据特定规则生成Token
    var token = productionToken(params)
    //加密请求参数
    var aesData = Encrypt(jsonStr)
	aesData = encodeURI(aesData).replace(/\+/g,'%2B');
	showLoding();
    fetch(host + url, {
        method : method,
        mode : 'cors',
        credentials: 'include',
        headers: {
        // 'Cookie': 'canary=always; X-Header-Canary=always; path=/; domain=.aiyongbao.com;',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body : 'TOKEN='+token+"&aesData="+aesData
    }).then(res=>res.text()).then(function(responseText){
		hideLoding();
        var result = DeAes2(responseText)
        let data = '';
        if (!IsEmpty(result)) {
            data = JSON.parse(result)
        }else{
            alert(result);
        }
        console.log(url,data)
        if (!IsEmpty(data.code) && data.code > 300) {
            let text = data.value
            if (IsEmpty(text)) {
            text = data.res
            }
            return
        } else {
            if (!IsEmpty(callback)) {
            callback(data)
            }
        }
    }, function(error){

    });
  }
  /*
  type
  操作类型
  同步存储
*/
function local({ key, data, type }) {
	switch (type) {
	case 'save':
		localStorage.setItem(key, data);
		return true;
	case 'get':
		let res = localStorage.getItem(key)
		return res
	case 'remove':
		localStorage.removeItem(key)
		return 1
	case 'clear':
		localStorage.clear();
		return 1;
	}
}

  /*
  喜闻乐见的IsEmpty
*/
function IsEmpty(key) {
	if (typeof key === 'string') {
		key = key.replace(/(^\s*)|(\s*$)/g, '');
		if (
			key == '' ||
			key == null ||
			key == 'null' ||
			key == undefined ||
			key == 'undefined' ||
			key == 0 ||
			key == '0'
		) {
			return true;
		} else {
			return false;
		}
	} else if (typeof key === 'undefined') {
		return true;
	} else if (typeof key == 'object') {
		for (let i in key) {
			return false;
		}
		return true;
	} else if (typeof key == 'boolean') {
		return false;
	} else if (key == 0) {
		return true;
	}
	return false;
}
/**
 * 获取唯一标识id
 * @param {*} len 长度
 * @param {*} radix 编码
 */
function getUUID(len,radix){
	let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	let uuid = [],i;
	radix = radix || chars.length;
	if (len){
		for (i = 0; i < len; i++) uuid[i] = chars[0|Math.random()*radix];
	} else{
		let r;
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';
		for (i = 0; i < 36; i++) {
			if (!uuid[i]){
				r = 0|Math.random()*16;
				uuid[i] = chars[(i == 19) ? (r&0x3)|0x8 : r];
			}
		}
	}
	return uuid.join('');
}
export {
	api,
	getUUID
}