import React from 'react';
import './styles.css';
import Header from './Header';
import Footer from './Footer';

const repositories = [
	{
		url: 'https://www.github.com/erichbehrens/react-animated-slider',
		title: 'react-animated-slider',
		description: 'Animated slider component for react',
	},
	{
		url: 'https://www.github.com/erichbehrens/pull-request-monitor',
		title: 'GitHub Pull Request Monitor',
		description: 'VS Code extension',
	},
	{
		url: 'https://www.github.com/erichbehrens/react-on-scroll',
		title: 'react-on-scroll',
		description: 'Animate on scroll, lazy load, infinite scroll component for react',
	},
]

function App() {
	return <div>
		<Header />
		<ul className="repositories">
			{repositories.map(repo => <li key={repo.url}>
				<h3>{repo.title}</h3>
				<div>
				 <span className="small">{repo.type}</span>{repo.description}</div>
				<a href={repo.url} target="_blank">View on GitHub</a>
			</li>)}
		</ul>
		<Footer />
	</div>;
}

export default App;
