import React from "react";
import {NavBarListItems} from '../../assets/js/constants';

function Header () {
	return (
		<header className="header">
			<a href="./#" target="_blank" rel="noreferrer"><div className={'header__logo'}/></a>
			<nav className="header__list">
				{NavBarListItems.map((item, idx: any) =>
					<a className='header__link' href={item.link} key={`header__link-` + (idx+1)} >
						<li className="header__item txt-3" key={`header__item-` + (idx+1)}>{item.name}</li>
					</a>)}
			</nav>
		</header>
	)
}

export default Header;
