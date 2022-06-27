import React from "react";
import eth1 from "../../assets/nft-2.png";

export default function NFTPage1() {
	return (
		<div className="nft1">
			<div className="container">
				
				<div className="content">
					<h2 className="title">
						NFT 1
					</h2>
					<p className="description">
						Our 1st NFT offering
					</p>
					<p className="description">
						All the things you want it to be as a NFT #1
					</p>
					<div className="image">
						<img src={eth1} alt="eth1" />
					</div>
				</div>
				
				<div className="content2">
					<h2 className="title">
					Buy Now and Save
					</h2>
					<p className="description">
						for the best deals act fast
					</p>
					<button>
						Buy Now
					</button>
				</div>

			</div>
		</div>
	);
}
