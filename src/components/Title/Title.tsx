import React from "react";

interface PropTypes {
	title: string
}

function Title (props: PropTypes) {
	return (
		<h2 className={`content__title txt-1`}>{props.title}</h2>
	)
}

export default Title;
