import React, { Component } from 'react';
import { render } from 'react-dom'; // eslint-disable-line no-unused-vars

class Navigation extends Component {
	render() {
		return <ul className="list-reset flex p-6">
			<li className="mr-6">
				<a className="text-blue hover:text-blue-darker" href="#">Active</a>
			</li>
			<li className="mr-6">
				<a className="text-blue hover:text-blue-darker" href="#">Link</a>
			</li>
			<li className="mr-6">
				<a className="text-blue hover:text-blue-darker" href="#">Link</a>
			</li>
			<li className="mr-6">
				<a className="text-grey-light cursor-not-allowed" href="#">Disabled</a>
			</li>
		</ul>;
	}
}

export default Navigation;