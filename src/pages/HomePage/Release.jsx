import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../../assets/nft-2.png";
import release2 from "../../assets/nft-2.png";
import Card from "../../components/Card/Card";

export default function Release() {
	return (
		<div className="releases">
			<div className="release orange">
				<div className="content">
					<h2 className="title">
						Initial Release 4/11
					</h2>
					<p className="description">
						We have released four limited edition NFT's early which can be bid
						on via 
						&nbsp;
						<Link to="#">Open Sea.</Link>
					</p>
					<p className="description">
						There will only be four of these NFTs made, be sure not to miss out!
					</p>
					<p className="description">
						50% of proceeds go to charity.
					</p>
					<Link to="#" className="link">
						Check them out
						<BsArrowRight />
					</Link>
				</div>
				<div className="image">
					<img src={release1} alt="release" />
					<div className="ellipse pink"></div>
				</div>
			</div>

			<div className="release green">
				<div className="card-container">
					<Card
						image={release2}
						series="Floop Series"
						title="Purple Man"
						price={2.99}
						tag={12983}
						time={1}
					/>
					<div className="ellipse orange"></div>
				</div>

				<div className="content">
					<h2 className="title">Initial Release 4/11</h2>
					<p className="description">
						We have released four limited edition NFT's early which can be bid
						on via 
						&nbsp;
						<Link to="#">Open Sea.</Link>
					</p>
					<p className="description">
						There will only be four of these NFTs made, be sure not to miss out!
					</p>
					<p className="description">
						50% of proceeds go to charity.
					</p>
					<Link to="#" className="link">
						Check them out
						<BsArrowRight />
					</Link>
				</div>
			</div>
		</div>
	);
}
