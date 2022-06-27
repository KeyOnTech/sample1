import React from "react";
import { Link } from "react-router-dom";
import super1 from "../../assets/nft-2.png";
import super2 from "../../assets/ic_kot_1_round.png";
import super3 from "../../assets/nft-2.png";
import super4 from "../../assets/ic_kot_1_round.png";
import Card from "../../components/Card/Card";

export default function SuperRare() {
	const data = [
		{
			image: super1,
			series: "ALoop Series",
			title: "Orange Man",
			price: 2.78,
			tag: 13987,
			time: 1,
		},
		{
			image: super2,
			series: "ALoop Series",
			title: "Beige Man",
			price: 2.78,
			tag: 13987,
			time: 1,
		},
		{
			image: super3,
			series: "ALoop Series",
			title: "Green Man",
			price: 2.78,
			tag: 13987,
			time: 1,
		},
		{
			image: super4,
			series: "ALoop Series",
			title: "Yellow Man",
			price: 2.78,
			tag: 13987,
			time: 1,
		},
	];
	return (
		<div className="superRare">
			<div className="title-container">
				<h2 className="title">
					LE Super Rare Auction
				</h2>
				<p className="description">
					We have released four limited edition NFT's that can be bid on via
					&nbsp;
					<Link to="#">
						OpenSea
					</Link>
				</p>
			</div>
			<div className="cards">
				{data.map(({ image, price, series, tag, time, title }, index) => (
					<Card
						image={image}
						series={series}
						title={title}
						price={price}
						tag={tag}
						time={time}
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
