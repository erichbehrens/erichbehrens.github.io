import React from 'react';

class AppearAfter extends React.Component {
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

export default AppearAfter;
