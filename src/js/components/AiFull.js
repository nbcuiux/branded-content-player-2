import React, { Component, PropTypes } from 'react';
import AiFullScenes from './AiFullScenes';
import AiFullPeople from './AiFullPeople';
import AiFullCharacter from './AiFullCharacter';
import AiFullMusic from './AiFullMusic';
import AiFullStarred from './AiFullStarred';
import AiFullTrivia from './AiFullTrivia';
import AiFullProducts from './AiFullProducts';

import classNames from "classnames";


export default class AiFull extends Component {

	static propTypes = {
		show: PropTypes.bool,
		close: PropTypes.func,
		showing: PropTypes.string,
		goToPage: PropTypes.func,
		personData: PropTypes.object,
		starredData: PropTypes.array,
		addAiStarred: PropTypes.func,
		removeAiStarred: PropTypes.func
	}

	constructor(props) {
		super(props);
	    this.state = {
	    	person: {}
	    };
	}

	loadCharacter = (e) => {
	    this.setState({
	    	person: e
	    });
	}

	render() {

		const { show, close , showing, goToPage, personData, starredData, addAiStarred, removeAiStarred } = this.props;

 		const classnames = classNames({
 			'ai-full': true,
 			'ai-full--show': show
 		});
 		
		return (
			<div>
				<div className={classnames}>
					<div className="navigation">
						<nav>
							<span><i className="iconcss icon-vai"></i></span>
							<a className={(showing == 'scenes') ? 'active' : null } onClick={ () => goToPage('scenes')}>Scenes</a>
							<a className={(showing == 'people' || showing == 'character') ? 'active' : null } onClick={() => goToPage('people')}>People</a>
							<a className={(showing == 'products') ? 'active' : null } onClick={() => goToPage('products')}>Products</a>
							<a className={(showing == 'music') ? 'active' : null } onClick={() => goToPage('music')}>Music</a>
							<a className={(showing == 'trivia') ? 'active' : null } onClick={() => goToPage('trivia')}>Trivia</a>
							<hr/>
							<a className={(showing == 'starred') ? 'active' : null } onClick={() => goToPage('starred')}>
								<i className="iconcss icon-star-fill"></i>
								Starred
							</a>
						</nav>
						<div className="close" onClick={ this.props.close }>
							<i className="iconcss icon-close"></i>
						</div>
					</div>
					<AiFullScenes 
					show={ showing == 'scenes' }
					/>
					<AiFullPeople
					show={ showing == 'people' }
					click={ goToPage }
					/>
					{ personData != null ? (
					<AiFullCharacter 
					show={ showing == 'character' }
					click={ () => goToPage('people') }
					person={ personData }
					/>
					) : null }
					<AiFullMusic 
					show={ showing == 'music' }
					/>
					<AiFullStarred 
					show={ showing == 'starred' }
					data={ starredData }
					addStar={ addAiStarred }
					removeStar={ removeAiStarred }
					/>
					<AiFullTrivia 
					show={ showing == 'trivia' }
					/>
					<AiFullProducts 
					show={ showing == 'products' }
					/>
				</div>
			</div>
		)
	}
}