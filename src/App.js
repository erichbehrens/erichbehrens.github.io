import React from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import Repository from './Repository';

const repositories = [
	{
		url: 'https://www.github.com/erichbehrens/react-animated-slider',
		title: 'React animated slider',
		description: 'Animated slider component for react',
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
		description: 'VS Code extension',
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
		description: 'Animate on scroll, lazy loader, infinite scroll component for react',
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
		description: 'Just a simple react app deployed to GitHub Pages with Travis CI',
		shields: [
			{
				alt: 'Travis',
				url: 'https://travis-ci.org/erichbehrens/erichbehrens.github.io',
				src: 'https://img.shields.io/travis/erichbehrens/erichbehrens.github.io.svg?branch=develop',
			},
		],
	},
];

class ApperAfter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isVisible: false	};
		setTimeout(() => this.setState({ isVisible: true }), props.delay || 1000);
	}
	render() {
		const { isVisible } = this.state;
		const { hidden = 'hidden', visible = 'visible', children } = this.props;
		return React.cloneElement(children, {
			className: [isVisible ? visible : hidden, children.props.className].filter(v => v).join(' '),
		});
	}
}

function App() {
	return <div>
		<Header />

		<h2 className="main">Some cool projects I've been working on</h2>
		<ul className="repositories">
			{repositories.map((repo, index) => <li key={repo.url}>
				<ApperAfter delay={(index + 1) * 500}><Repository value={repo} /></ApperAfter>
			</li>)}
		</ul>
		<Footer />
	</div>;
}

export default App;
