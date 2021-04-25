import React from "react";

interface PropTypes {
	text: string,
	class?: boolean | string,
}


function Paragraph (props: PropTypes) {
	let style : string = '';
	props.class === true || '' ?
		style = `${props.class}_formatted` :
		style = '';
	return (
		<p id={`${Math.floor(Math.random() * 1e9)}`} className={`content__paragraph txt-3 ${style}`}>{props.text}</p>
	)
}

export default Paragraph;
