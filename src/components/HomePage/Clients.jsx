import React from "react";
import clients1 from "../../assets/ic_kot_1_round.png";
import clients2 from "../../assets/nft-2.png";
import clients3 from "../../assets/ic_kot_1_round.png";
import clients4 from "../../assets/nft-2.png";
import clients5 from "../../assets/ic_kot_1_round.png";

export default function Clients() {
	const data = [clients1, clients2, clients3, clients4, clients5];
	return (
		<div className="clients">
			<div className="container">
				<div className="clients-container">
					{data.map((client, index) => (
						<div className="client" key={index}>
							<img src={client} alt="client" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
