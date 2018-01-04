import React from 'react';
import OnScroll from 'react-on-scroll';

class AnimateOnScroll extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isVisible: false	};
	}

	setVisible = isVisible => this.setState({ isVisible });

	render() {
		const { isVisible } = this.state;
		const { children } = this.props;
		return <OnScroll
			triggerBase="top"
			triggers={[
				{ bottom: 100, callback: visible => this.setVisible(visible) },
			]}
		>
			{React.cloneElement(children, {
				className: [isVisible ? 'visible' : 'hidden', children.props.className].filter(v => v).join(' '),
			})}
		</OnScroll>;
	}
}

export default AnimateOnScroll;
