import React from "react";
import Title from "../Title/Title";
import * as variable from "../../assets/js/constants";
import Paragraph from "../Paragraph/Paragraph";
import Form from "../Form/Form";

function Content () {
	return (
			<section className='content'>
				<Title title={variable.TITLE_01}/>
				<Paragraph text={variable.TEXT_01}/>
				<Paragraph text={variable.TEXT_02} class={true}/>
				<Title title={variable.TITLE_02}/>
				<Paragraph text={variable.TEXT_03} class={true}/>
				<Title title={variable.TITLE_03}/>
				{variable.thezises.map((item) =>
					<Paragraph text={item}/>
				)}
				<Form/>
			</section>

	)

}

export default Content;
