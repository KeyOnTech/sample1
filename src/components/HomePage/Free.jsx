import React from "react";
import icon from "../../assets/ic_kot_1_round.png";
import super1 from "../../assets/nft-2.png";
import release2 from "../../assets/nft-2.png";
// import super1 from "../../assets/kot2_48x48.png";
// import release2 from "../../assets/kot2_48x48.png";
import Card from "../Card/Card";

export default function Free() {
	return (
		<div className="free">

			<div className="container">
				<div className="background">
					<div className="ellipse pink"></div>
					<div className="ellipse green"></div>
				</div>
				<div className="content">
					<div className="image">
						<img src={icon} alt="icon" />
					</div>
					<h2 className="title">
						Free NFT for early birds
					</h2>
					<p className="description">
						Sign up today and get a free NFT when we launch
					</p>
				</div>
			</div>

			<div className="cards">
				<div className="card1">
					<Card
						image={super1}
						series="Flutter Series"
						title="Purple Go"
						price={2.99}
						tag={12888}
						time={1}
					/>
				</div>
				<div className="card2">
					<Card
						image={release2}
						series="Trutter Series"
						title="Orange Go"
						price={3.72}
						tag={12888}
						time={2}
					/>
				</div>
			</div>
			
		</div>
	);
}
