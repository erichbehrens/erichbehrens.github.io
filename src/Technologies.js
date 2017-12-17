import React from 'react';
import './Technologies.css';
import AppearAfter from './AppearAfter';

const technologies = ['ES6', 'React', 'Redux', 'Jest', 'Node', 'Webpack'];

function Technologies() {
	const animationOrder = [1, 4, 2, 5, 3, 6];
	return (
		<div className="section technologies">
			<h2>Technologies I'm using</h2>
			In more than 10 years working as a software developer
			I've touched many technologies and languages.<br />
			Currently I'm mostly focused on:
			<div className="list">
				{technologies.map((item, index) => <AppearAfter
					delay={animationOrder[index] * 300}
					key={item}
				>
					<span className="technology">{item}</span>
				</AppearAfter>)}
			</div>
		</div>
	);
}

export default Technologies;
