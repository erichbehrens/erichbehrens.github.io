import React from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import Technologies from './Technologies';
import Repository from './Repository';
import AppearAfter from './AppearAfter';

const repositories = [
	{
		url: 'https://www.github.com/erichbehrens/react-animated-slider',
		title: 'React animated slider',
		description: 'Slider component with support for animations, SSR, touch/swipe interactions and much more.',
		shields: [
			{
				alt: 'Circle CI',
				url: 'https://circleci.com/gh/erichbehrens/react-animated-slider/tree/master',
				src: 'https://circleci.com/gh/erichbehrens/react-animated-slider/tree/master.svg?style=shield',
			},
			{
				alt: 'npm version',
				url: 'https://www.npmjs.com/package/react-animated-slider',
				src: 'https://img.shields.io/npm/v/react-animated-slider.svg',
			},
			{
				alt: 'npm downloads',
				url: 'https://www.npmjs.com/package/react-animated-slider',
				src: 'https://img.shields.io/npm/dt/react-animated-slider.svg',
			},
		],
	},
	{
		url: 'https://www.github.com/erichbehrens/pull-request-monitor',
		title: 'GitHub Pull Request Monitor',
		description: 'This VS Code extension uses the GitHub api to monitor the state of your pull requests and let you know when it\'s time to merge or if someone requested changes.',
		shields: [
			{
				alt: 'Travis',
				url: 'https://travis-ci.org/erichbehrens/pull-request-monitor',
				src: 'https://img.shields.io/travis/erichbehrens/pull-request-monitor.svg?branch=master',
			},
			{
				alt: 'VS Code Marketplace Version',
				url: 'https://marketplace.visualstudio.com/items?itemName=erichbehrens.pull-request-monitor',
				src: 'https://vsmarketplacebadge.apphb.com/version/erichbehrens.pull-request-monitor.svg',
			},
			{
				alt: 'Extension installs',
				url: 'https://marketplace.visualstudio.com/items?itemName=erichbehrens.pull-request-monitor',
				src: 'https://vsmarketplacebadge.apphb.com/installs/erichbehrens.pull-request-monitor.svg',
			},
		],
	},
	{
		url: 'https://www.github.com/erichbehrens/react-on-scroll',
		title: 'React on scroll',
		description: 'Animate on scroll, lazy loader, infinite scroll component for react. ',
		shields: [
			{
				alt: 'Travis',
				url: 'https://travis-ci.org/erichbehrens/react-on-scroll',
				src: 'https://img.shields.io/travis/erichbehrens/react-on-scroll.svg?branch=master',
			},
			{
				alt: 'npm version',
				url: 'https://www.npmjs.com/package/react-on-scroll',
				src: 'https://img.shields.io/npm/v/react-on-scroll.svg',
			},
			{
				alt: 'npm downloads',
				url: 'https://www.npmjs.com/package/react-on-scroll',
				src: 'https://img.shields.io/npm/dt/react-on-scroll.svg',
			},
		],
	},
	{
		url: 'https://www.github.com/erichbehrens/erichbehrens.github.io',
		title: 'This page 😉',
		description: 'A simple react app deployed to GitHub Pages with Travis CI.',
		shields: [
			{
				alt: 'Travis',
				url: 'https://travis-ci.org/erichbehrens/erichbehrens.github.io',
				src: 'https://img.shields.io/travis/erichbehrens/erichbehrens.github.io.svg?branch=develop',
			},
		],
	},
];

function App() {
	return <div>
		<Header />
		<div className="page">
			<Technologies />
			<h2>Some cool projects I'm working on</h2>
			<ul className="repositories">
				{repositories.map((repo, index) => <li key={repo.url}>
					<AppearAfter delay={(index + 1) * 1000}><Repository value={repo} /></AppearAfter>
				</li>)}
			</ul>
		</div>
		<Footer />
	</div>;
}

export default App;
