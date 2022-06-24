import React from "react";
import eth1 from "../../assets/nft-2.png";
import eth2 from "../../assets/nft-2.png";

export default function Like() {
	return (
		<div className="like">
			<div className="container">
				<div className="content">
					<div className="image">
						<img src={eth1} alt="eth1" />
					</div>
					<h2 className="title">
						An NFT like no other
					</h2>
					<p className="description">
						Don't miss out on the release of our new NFT. Sign up below to
						receive updates when we go live on 2/23.
					</p>
					<p className="description">
						Don't miss out on the release of our new NFT. Sign up below to
						receive updates when we go live on 2/23. Don't miss out on this new
						release.
					</p>
				</div>

				<div className="content">
					<div className="image">
						<img src={eth2} alt="eth2" />
					</div>
					<h2 className="title">
						An NFT like no other
					</h2>
					<p className="description">
						Don't miss out on the release of our new NFT. Sign up below to
						receive updates when we go live on 2/23.
					</p>
					<p className="description">
						Don't miss out on the release of our new NFT. Sign up below to
						receive updates when we go live on 2/23. Don't miss out on this new
						release.
					</p>
				</div>
			</div>
		</div>
	);
}
