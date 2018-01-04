import React from 'react';
import './Header.css';

function Header({ sticked, className }) {
	return (
		<div className={className}>
			<h1 className={`primary ${sticked ? 'sticky' : 'inline'}`}>Erich Behrens</h1>
			<h2 className={`secondary ${sticked ? 'sticky' : 'inline'}`}>Frontend developer</h2>
		</div>
	);
}

export default Header;
