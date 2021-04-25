import React from "react";
import Title from "../Title/Title";

function Form () {

	function handleSubmit (evt: { preventDefault: () => void; }) {
		evt.preventDefault()
		return console.log('yo!');
	}

	return (
		<>
			<Title title={'Форма'}/>
			<form className='form' name='form' noValidate={true} onSubmit={handleSubmit}>
				<div className="form__input-wrapper">
					<input className='form__input txt-3' type='text' name='name' id='input-name' placeholder='Иванов Иван'/>
					<label className='form__input-placeholder txt-3' htmlFor="input-email">Имя и фамилия автора</label>
				</div>
				<div className="form__input-wrapper">
					<input className='form__input txt-3' type='email' name='email' id='input-email' placeholder='info@marshak.com'/>
					<label className='form__input-placeholder txt-3' htmlFor="input-email">Ваша почта</label>
				</div>
				<div className="form__input-wrapper">
					<input className='form__input txt-3' name='phone' type='tel' id='input-phone' placeholder='+7 (999) 123-45-67'/>
					<label className='form__input-placeholder txt-3' htmlFor="input-phone">Ваш телефон для связи</label>
				</div>
				<div className="form__input-wrapper">
					<textarea className='form__input txt-3' name='text' id='input-text' placeholder='Напишите что-нибудь здесь'/>
					<label className='form__input-placeholder txt-3' htmlFor="input-text">Стихи</label>
				</div>
				<div className="form__oferta">
					<input className='form__input_type_checkbox' type='radio' name='checkbox' id='input-checkbox'/>
					<p className='form__confirm-text txt-3'> Согласен с <a className="form__link" href='#' target='_blank' rel='noreferrer'>офертой</a></p>
				</div>
				<button className="form__submit txt-3" type='submit'>Отправить</button>
			</form>
		</>
	)
}

export default Form;
