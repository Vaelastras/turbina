import * as React from "react";

let date: Date = new Date();
let fullYear: string = date.getFullYear().toString()

function Footer () {
	return (
		<footer className="footer">
			<p className="footer__copyright txt-3">&copy; {fullYear}, Alex Belov</p>
			<div className="footer__info">
				<p className="footer__copyright txt-3">Сделано студентами <a className="footer__link txt-3" href='https://praktikum.yandex.ru' target='_blank' rel="noreferrer">Яндекс.Практикума</a></p>

			</div>
		</footer>
	)
}

export default Footer;
