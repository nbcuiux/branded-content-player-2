import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classNames from "classnames";

export default class AiFullStarred extends Component {

	static propTypes = {
		show: PropTypes.bool,
		addStar: PropTypes.func,
		removeStar: PropTypes.func
	}

	constructor(props) {
		super(props);
	}

	render() {

		const { show, data, addStar, removeStar } = this.props;

		let starredList;

		if (this.props.data.length > 0) {
			starredList = data.map((starredItem, index) =>
				<div key={index}>
					<AiFullListItem
					type={starredItem.type}
					image={starredItem.image}
					title={starredItem.title}
					subtitle={starredItem.subtitle}
					ctas={starredItem.ctas}
					addS={() => addStar(starredItem)}
					removeS={() => removeStar(starredItem.key)}
					/>
				</div>
			);
		} else {
			starredList = (
			<div className="empty-state">
				<i className="iconcss icon-empty-state"></i>
				<h2>You havn't starred anything yet. <br></br> Get to Starrin'</h2>
			</div>);
		}




		// console.log(starredList);

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--starred': true,
			'list-container--needs-scroll': this.props.data.length > 2
		});
 		
		return (
			<div className={classnames}>
				<div className="list-column"></div>
				<div className="list-scrolling">
					{ starredList }
				</div> 
				<div className="list-column"></div>
			</div>
		)
	}
}