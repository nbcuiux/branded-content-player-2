import React, { Component, PropTypes } from 'react';
import AiFullListItem from './AiFullListItem';
import classNames from "classnames";

export default class AiFullScenes extends Component {

	static propTypes = {
		show: PropTypes.bool,
	}

	constructor(props) {
		super(props);
	}

	render() {

		const { show } = this.props;

		const classnames = classNames({
			'list-container': true,
			'list-container--show': show,
			'list-container--scenes': true
		});
 		
		return (
			<div>
				<div className={classnames}>
					<div className="list-column"></div>
					<div className="list-scrolling">
						<AiFullListItem
						type={"scene"}
						image={"assets/img/scene-1.jpg"}
						title={"Elliot Looks for a Clue"}
						subtitle={"00:00:00 — 00:06:17"}
						ctas={[
							[
							"Go To Scene",
							"iconcss icon-play-outline"
							]
						]}
						/>
						<AiFullListItem
						type={"scene"}
						image={"assets/img/scene-2.jpg"}
						title={"Elliot learns more about what happened"}
						subtitle={"00:06:17 — 00:09:45"}
						ctas={[
							[
							"Go To Scene",
							"iconcss icon-play-outline"
							]
						]}
						/>
						<AiFullListItem
						type={"scene"}
						image={"assets/img/scene-3.jpg"}
						title={"Darlene and Fsosiety take the final step"}
						subtitle={"00:09:45 — 00:12:45"}
						ctas={[
							[
							"Go To Scene",
							"iconcss icon-play-outline"
							]
						]}
						/>
						<AiFullListItem
						type={"scene"}
						image={"assets/img/scene-4.jpg"}
						title={"What am I supposed to do"}
						subtitle={"00:12:45 — 00:13:60"}
						ctas={[
							[
							"Go To Scene",
							"iconcss icon-play-outline"
							]
						]}
						/>
					</div>
					<div className="list-column"></div>
				</div>
			</div>
		)
	}
}