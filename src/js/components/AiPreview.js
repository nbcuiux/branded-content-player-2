import React, { Component, PropTypes } from 'react';
import AiPreviewListItem from './AiPreviewListItem';
import classNames from "classnames";


export default class AiPreview extends Component {

	static propTypes = {
		show: PropTypes.bool,
		currentTime: PropTypes.number,
		fullAiCardShow: PropTypes.func,
		showFullAiCard: PropTypes.bool,
		addAiStarred: PropTypes.func,
		removeAiStarred: PropTypes.func,
		checkAiStarred: PropTypes.func
	}

	constructor(props) {
		super(props);
		this.state = {
			isHovering: false
		}
	}

	onMouseOver = (e) => {
		clearTimeout(this.mouseMoveTimeout);
		this.setState({
			isHovering: true
		})
		this.mouseMoveTimeout = setTimeout(()=> {
			this.setState({
				isHovering: false
			});
		}, 24000);
	}

	onMouseOut = (e) => {
		clearTimeout(this.mouseMoveTimeout);
		this.setState({
			isHovering: false
		})
	}


	render() {

		const { show, currentTime, fullAiCardShow, showFullAiCard, addAiStarred, removeAiStarred, checkAiStarred } = this.props;
		const { isHovering } = this.state;

 		const classnames = classNames({
 			'ai-preview': true,
 			'ai-preview--show': show || (isHovering && currentTime != 0 && !showFullAiCard)
 		});

		return (
			<div>
				<div className={classnames} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
					<div className="ai-more" onClick={ () => fullAiCardShow('starred') }>
						<div className="divider"></div>
						<span>More</span>
						<div className="ellipsis"></div>
						<div className="ellipsis"></div>
						<div className="ellipsis"></div>
					</div>
					<input id="toggleWikiPreview" type="checkbox" defaultChecked="true"/>
					<label htmlFor="toggleWikiPreview">
						<div className="circle"></div>
						<span>v.ai</span>
					</label>
					<div className="ai-preview-list">
						<div className="ai-preview-list-column"></div>
						<div className="ai-preview-list-scrolling">
							<AiPreviewListItem
							type={"product"}
							image={"assets/img/floral-heart-sunglasses.jpg"}
							title={"Floral Heart Glasses"}
							subtitle={"Torrid Fashion"}
							onclick={() => fullAiCardShow('products')}
							addStar={() => addAiStarred({key:0,type:"product",image:"assets/img/floral-heart-sunglasses-lg.jpg",title:"Floral Heart Glasses",subtitle:"Torrid Fashion",ctas:[["View Product","iconcss icon-product","http://www.torrid.com/product/floral-heart-sunglasses/10265338.html"],["Go To Scene","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(0)}
							isStarred={() => checkAiStarred(0)}
							/>
							<AiPreviewListItem
							type={"trivia"}
							title={"Trivia"}
							subtitle={'In this episode, the security company has to thwart a DDoS attack. "DDoS" stands for "distributed denial of service." It\'s a tactic used to prevent a company\'s servers from functioning by using all their bandwidth. Real or virtual computers all send and receive data to all servers on a network, stopping legitimate users from exercising real transactions. This effectively stops business from taking place, causing a loss in revenue and consumer trust.'}
							onclick={() => fullAiCardShow('trivia')}
							/>
							<AiPreviewListItem
							type={"person"}
							image={"assets/img/darlene-alderson.jpg"}
							title={"Darlene Alderson"}
							subtitle={"Carly Chaikin"}
							onclick={() => fullAiCardShow('character', {characterName:"Darlene Alderson",actorName:"Carly Chaikin",characterImage:"assets/img/darlene-alderson-lg.jpg",actorImage:"assets/img/carly-chaikin.jpg",characterBio:"Darlene is a malware coder whose skills are fundamental to fsocietys master plan. Though biting and jaded, she becomes Elliots confidante. He relies on her resilience and creativity for quick problem solving and fast hacks. She is an excellent lock picker, a crass jokester and a jobless transient. She obtains money from hacking ATMs. Like most fsociety members, she is reluctant to reveal too many details of her history, and she is paranoid about communication. However, Darlenes loyalty trumps all, and in the end, her big heart overrides her sharp tongue.",actorBio:"Carly Chaikin was born on March 26, 1990 in Santa Monica, California, USA as Carly Hannah Chaikin. She is an actress and producer, known for Mr. Robot (2015), Suburgatory (2011) and The Last Song (2010).",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }							
							addStar={() => addAiStarred({key:2,type:"person",image:"assets/img/darlene-alderson-lg.jpg",title:"Darlene Alderson",subtitle:"Carly Chaikin",ctas:[["Go To Bio","iconcss icon-person","#",() => fullAiCardShow('character', {characterName:"Darlene Alderson",actorName:"Carly Chaikin",characterImage:"assets/img/darlene-alderson-lg.jpg",actorImage:"assets/img/carly-chaikin.jpg",characterBio:"Darlene is a malware coder whose skills are fundamental to fsocietys master plan. Though biting and jaded, she becomes Elliots confidante. He relies on her resilience and creativity for quick problem solving and fast hacks. She is an excellent lock picker, a crass jokester and a jobless transient. She obtains money from hacking ATMs. Like most fsociety members, she is reluctant to reveal too many details of her history, and she is paranoid about communication. However, Darlenes loyalty trumps all, and in the end, her big heart overrides her sharp tongue.",actorBio:"Carly Chaikin was born on March 26, 1990 in Santa Monica, California, USA as Carly Hannah Chaikin. She is an actress and producer, known for Mr. Robot (2015), Suburgatory (2011) and The Last Song (2010).",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["Go To Scene","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(2)}
							isStarred={() => checkAiStarred(2)}
							/>
							<AiPreviewListItem
							type={"trivia"}
							title={"Fun Fact"}
							subtitle={"Elliot's signature black hoodie is from Rami Malek's own personal wardrobe."}
							onclick={() => fullAiCardShow('trivia')}
							/>
							<AiPreviewListItem
							type={"music"}
							image={"assets/img/sound-and-color.jpg"}
							title={"Sound and Color"}
							subtitle={"Alabama Shakes"}
							onclick={() => fullAiCardShow('music')}
							addStar={() => addAiStarred({key:1,type:"music",image:"assets/img/sound-and-color-lg.jpg",title:"Sound and Color",subtitle:"Alabama Shakes",ctas:[["View Song","iconcss icon-music","https://open.spotify.com/track/3yA4Rwh8tA3jyVkdWXyzCg"],["Go To Scene","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(1)}
							isStarred={() => checkAiStarred(1)}
							/>
							<AiPreviewListItem
							type={"product"}
							image={"assets/img/cadillac-escalade.jpg"}
							title={"2017 Cadillac Escalade SUV"}
							subtitle={"Cadillac"}
							onclick={() => fullAiCardShow('products')}
							addStar={() => addAiStarred({key:3,type:"product",image:"assets/img/cadillac-escalade-lg.jpg",title:"2017 Cadillac Escalade SUV",subtitle:"Cadillac",ctas:[["View Product","iconcss icon-product","http://www.cadillac.com/preceding-year/escalade-suv.html"],["Go To Scene","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(3)}
							isStarred={() => checkAiStarred(3)}
							/>
							<AiPreviewListItem
							type={"trivia"}
							title={"General Trivia"}
							subtitle={'Throughout the episode, Elliot references "IRC." Standing for Internet Relay Chat, IRC is an application protocol that allows for plaintext communication via a client/server model. A server hosts a "channel" where users can join to discuss various topics. However, "robots" are prevalent on servers. These allow users to communicate with the server itself, and request file transfers. There is a major presence of illegal file transfers facilitated by the use of these robots.'}
							onclick={() => fullAiCardShow('trivia')}
							/>
							<AiPreviewListItem
							type={"person"}
							image={"assets/img/elliot-alderson.jpg"}
							title={"Elliot Alderson"}
							subtitle={"Rami Malek"}
							onclick={() => fullAiCardShow('character', {characterName:"Elliot Alderson",actorName:"Rami Malek",characterImage:"assets/img/elliot-alderson-lg.jpg",actorImage:"assets/img/rami-malek.jpg",characterBio:"As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those hes close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.",actorBio:"Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian-his late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]}) }
							addStar={() => addAiStarred({key:4,type:"person",image:"assets/img/elliot-alderson-lg.jpg",title:"Elliot Alderson",subtitle:"Rami Malek",ctas:[["Go To Bio","iconcss icon-person","",() => fullAiCardShow('character', {characterName:"Elliot Alderson",actorName:"Rami Malek",characterImage:"assets/img/elliot-alderson-lg.jpg",actorImage:"assets/img/rami-malek.jpg",characterBio:"As a senior network technician for cyber security firm Allsafe, Elliot protects corporate clients including the ubiquitous Evil Corp from security breaches and data theft. As a vigilante hacker, he monitors the people in his daily life and protects those hes close to from their own flaws, sometimes with unpredictable results. Originally from Washington Township, New Jersey, Elliot now lives alone on the Lower East Side. He suffers from crippling anxiety, which stems from memories of his difficult childhood. His father died when Elliot was young, and his now-estranged mother was brutally cruel. Elliot has spent most of his adult life isolated from the world around him. After being arrested for financial hacking, he has been attending court-ordered therapy for almost a year. Elliot, however, prefers self-medication by morphine, an addiction he mediates with suboxone. He obtains both from his next door neighbor, Shayla. With the arrival of Mr. Robot, Elliots world changes entirely. Fsocietys members and mission offer him a renewed purpose -- though accompanied by a risk of heightened paranoia -- leaving him faced with the question of whether to numbly continue the life he knows or risk everything and participate in Mr. Robots revolution.",actorBio:"Rami Malek was born on May 12, 1981 in Los Angeles, California, USA as Rami Said Malek. He is an actor and producer, known for Mr. Robot (2015), Short Term 12 (2013) and Need for Speed (2014). His parents are Egyptian-his late father was a tour guide in Cairo and sold insurance. His mother is an accountant. His family moved to Los Angeles and Rami attended Notre Dame High School in Sherman Oaks, Los Angeles. Two of his classmates were Rachel Bilson and Taylor Fry. Kirsten Dunst graduated from the same school a year later, and Katharine McPhee graduated three years after Rami.",otherWorks:[{image:"assets/img/busters-mal-heart.jpg",link:"https://www.rottentomatoes.com/m/busters_mal_heart/"},{image:"assets/img/short-term-12.jpg",link:"https://www.rottentomatoes.com/m/short_term_12_2013"},{image:"assets/img/aint-them-bodies-saints.jpg",link:"https://www.rottentomatoes.com/m/aint_them_bodies_saints_2013"},{image:"assets/img/da-sweet-blood-of-jesus.jpg",link:"https://www.rottentomatoes.com/m/da_sweet_blood_of_jesus"},{image:"assets/img/mr-robot-extra.jpg",link:"https://www.rottentomatoes.com/tv/mr_robot"}]})],["Go To Scene","iconcss icon-play-outline"]]})}
							removeStar={() => removeAiStarred(4)}
							isStarred={() => checkAiStarred(4)}
							/>
						</div>
						<div className="ai-preview-list-column"></div>
					</div>			
				</div>
			</div>
		)
	}
}