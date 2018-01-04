import React from 'react';
import OnScroll from 'react-on-scroll';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import Bio from './Bio';
import Technologies from './Technologies';
import Projects from './Projects';

class App extends React.Component {
	state = {
		stickyHeader: false,
	};

	setSticky = stickyHeader => this.setState({ stickyHeader });

	render() {
		const { stickyHeader } = this.state;
		return (
			<OnScroll
				triggerBase="top"
				triggers={[
					{ top: -75, callback: visible => this.setSticky(!visible) },
				]}
			>
				<div>
					<Header sticked={stickyHeader} className={`header ${stickyHeader ? 'sticky' : 'inline'}`} />
					<div className="page">
						<Bio />
						<Technologies />
						<Projects />
					</div>
					<Footer />
				</div>
			</OnScroll>
		);
	}
}

export default App;
