import React, { Component, PropTypes } from 'react';
import classNames from "classnames";

export default class AiFullCtas extends Component {

	static propTypes = {
		ctas: PropTypes.array
	}

	constructor() {
		super();
	}

	handleClick = (href, onclick) => {
		if (onclick) {
			onclick();
		}
		else {
			window.open(href, '_blank');
		}
	}

	render() {
		const { ctas } = this.props;
		let buttons;

		if (this.props.ctas) {
			buttons = ctas.map((cta, index) =>
				<a key={index} onClick={ () => this.handleClick(cta[2], cta[3]) }>
					<i className={cta[1]}></i>
					<span>{cta[0]}</span>
				</a>
			);
		}

		return (
			<div className="ctas">
				{buttons}	
			</div>
		)
	}
}