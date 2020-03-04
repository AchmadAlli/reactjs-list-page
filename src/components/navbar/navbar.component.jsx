import React from 'react';
import './navbar.styles.scss';
import NavbarLogo from '../../assets/navbar_logo.png';

export default function navbar() {
	return (
		<nav className="navbar">
			<div className="navbar__wrapper">
				<img src={NavbarLogo} height="60px" alt="come logo"/>
				<ul className="navbar__nav-item">
					<li className="active"> Dashboard </li>
					<li> Campaigns </li>
					<li> Payment </li>
					<li> logout </li>
				</ul>
			</div>
		</nav>
	)
}
