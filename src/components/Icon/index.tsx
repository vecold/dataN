import React from 'react';
/**
 * 图标组建，使用svg渲染，支持多色组件
 */

function Index({onClick=()=>{},name = '',color = '',font=16,styles={}}) {
	return (
		<svg  
			className="icon" 
			style={{...styles,fontSize:font,color:color}} 
			aria-hidden="true"
			onClick={onClick}
		>
            <use xlinkHref={name}></use>
		</svg>
	);
}


export default Index;