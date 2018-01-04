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
						I was born in Trieste, a city on the Italian border with Slovenia, with some strong Austro-Hungarian influence too.
						That's why I enjoy pasta, pizza, ljubljanska (cordon bleu), goulash, čevapčiči and many more as traditional dishes. 🍽️😋
					</p>
					<p>
						I've always been passionate about web development. I even started coding offline websites before I got my first internet connection.
					</p>
					<p>
						I like to explore new technologies and the opportunities they offer to improve our life, so I moved to Zürich to satisfy my tech-hunger.
					</p>
				</div>
			</AppearAfter>
			<AppearAfter delay={800}>
				<div className="subsection">
					<h3>Work experience</h3>
					<div className="experience">
						<h4 className="company">Deep Impact AG</h4>
						<div className="summary">
							<div>
								<span className="dates">2016+</span>
								<span className="role">Senior frontend developer</span>
							</div>
						</div>
						<span className="description">Building an advanced CMS with social features for eCommunities and much more</span>
					</div>
					<div className="experience">
						<h4 className="company">Simulware Srl</h4>
						<div className="summary">
							<div>
								<span className="dates">2011-2016</span>
								<span className="role">Lead developer, full stack</span>
							</div>
							<div>
								<span className="dates">2006-2011</span>
								<span className="role">Full stack developer</span>
							</div>
						</div>
						<span className="description">Developing a Learning Management System for online and offline courses, webinars, tests and reporting</span>
					</div>
				</div>
			</AppearAfter>
			<AppearAfter delay={1200}>
				<div className="subsection">
					<h3>Personal experience</h3>
					<div className="experience personal">
						<div className="summary">
							<span className="dates">2017+</span>
						</div>
						<span className="description">Open source projects you can find below</span>
					</div>
					<div className="experience personal">
						<div className="summary">
							<span className="dates">2004-2008</span>
						</div>
						<span className="description">IcedTears metal community (a band database with reviews, events, forum and more than 10k registered users)</span>
					</div>
					<div className="experience personal">
						<div className="summary">
							<span className="dates">2000-2004</span>
						</div>
						<span className="description">Freetime coding small projects</span>
					</div>
				</div>
			</AppearAfter>
		</div>
	);
}

export default Bio;
