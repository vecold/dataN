/**
 * 有局限性的showloading仅支持react，原生H5推荐使用document 的操作 原理 add 然后控制display
 * 使用react是因为优雅 yeah～
 * 个屁。。。reactdom 145K不想用了
 * h5原生真香
 */
import styles from './index.less';
const loadingStyle = {
    'margin': '6px auto',
    'width': '200px',
    'height': '200px',
    'background-size': '100%',
}
export function showLoding(){
    let jude = document.getElementById('allLoadingU');
    if(jude){
        jude.style.display = 'flex';
    }else{
        createLoad();
    }
}
export function hideLoding(){
    let jude = document.getElementById('allLoadingU');
    if(jude){
        jude.style.display = 'none';
    }
    return;
}

function createLoad(){
    let load = document.createElement('div');
    load.id = 'allLoadingU';
    load.className = styles.loadMask;
    // load.style.opacity = '0';
    load.style.transition = 'opacity 0.1s linear'; // mask
    document.body.appendChild(load);
    let icon = document.createElement('img');
    icon.setAttribute('src','https://q.aiyongbao.com/wechat/images/loading.gif');//50K也比150k好呀
    let iconStyle = loadingStyle;
    icon.setAttribute('style', inlineStyle(iconStyle));
    load.appendChild(icon);
}

function inlineStyle(style:any) {
    var res = '';
  
    for (var attr in style) {
      res += "".concat(attr, ": ").concat(style[attr], ";");
    }
  
    if (res.indexOf('display: flex;') >= 0) res += 'display: -webkit-box;display: -webkit-flex;';
    res = res.replace(/transform:(.+?);/g, function (s, $1) {
      return "".concat(s, "-webkit-transform:").concat($1, ";");
    });
    res = res.replace(/flex-direction:(.+?);/g, function (s, $1) {
      return "".concat(s, "-webkit-flex-direction:").concat($1, ";");
    });
    return res;
  }
  