/**
 *  阿里sdk 封装层
 * 
 */
var ali_ydl = {}

ali_ydl.aliShare = function (content, picPath) {
    if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        window.WindVane.call("AliShare","distribute",{content:content,feedId:1,feedType:0,picPath:[picPath]},function(e){
            console.log(e)
        },function(e){
            console.error(e)
        })//ios以及android 3.5.0以下用AliShare
    }else{
        window.WindVane.call("MSAliShare","distribute",{content:content,feedId:1,feedType:0,picPath:[picPath]},function(e){
            console.log(e)
        },function(e){
            window.WindVane.call("AliShare","distribute",{content:content,feedId:1,feedType:0,picPath:[picPath]},function(s){
                console.log(s)
            },function(s){
                console.error(s)
            })//ios以及android 3.5.0以下用AliShare
        })
    }
}

export default ali_ydl;