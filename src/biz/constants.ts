export const DOMAIN_TYPE = {
};

// 图片网址相关常量
export const IMAGES_TYPE = {
  
};
// 平台相关常量
export const PLATFORM_TYPE = {
    WEAPP: "wechat",
    SWAN: "swan",
    ALIPAY: "alipay",
    TT: "tt",
    WEB: "cyb",
    RN: "rn"
};

export const DATA_TYPE = {
    WX_DATA_DAYLY:'wxDataDayly',//微信日常数据
}

interface APP_TYPE {
    [key: string]: any,
}
export const APP_TYPE:APP_TYPE = {
    wc:'爱用旺铺',
    pdd:'拼多多',
    dtv:'代发助手高级版',
    dt:'代发助手',
}
export const APP_TYPE_EN:APP_TYPE = {
    WC:'wc',
    PDD:'pdd',
    DTV:'dtv',
    DT:'dt',
}
/**
 * 当前展示的内容,类似ifram的内容
 */
export const CURRENT_ITEM = {
    REAL_TIME:'REAL_TIME',
    HISTORICAL_TREND:'HISTORICAL_TREND',
    USER_DATA:'USER_DATA',
    USER_NEW_OLD:'USER_NEW_OLD',
    REVENUE:'REVENUE',
    AD_RESOURCES:'AD_RESOURCES' 
}