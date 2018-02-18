/* eslint-disable max-len */
import React from 'react';
import './Bio.css';
import AppearAfter from './AppearAfter';

function Bio() {
	return (
		<div className="section technologies">
			<h2>About me</h2>
			<AppearAfter delay={400}>
				<div className="subsection">
					<p>
						I'm a senior software developer with more than 15 years of experience.
						I'm currently based in <strong>Zürich (Switzerland)</strong> and focused on <strong>frontend</strong> technologies (node, react, babel, redux, etc).
					</p>
					<p>
						This website is a collection of my <strong>open source projects</strong>. You can find out more about my work experience on <a href="https://erichbehrens.com" title="Erich Behrens - Frontend developer"><strong>erich</strong><strong>behrens</strong>.com</a>
					</p>
				</div>
			</AppearAfter>
		</div>
	);
}

export default Bio;
