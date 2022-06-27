import React from "react";

import TopSection from "./TopSection";
import Free from "./Free";
import Clients from "./Clients";
import SuperRare from "./SuperRare";
import Release from "./Release";
import Like from "./Like";
import SignUp from "./SignUp";

export default function Home() {
	return (
		<div className="home">
			<TopSection />

			<Free />
			{/* <Clients /> */}
			<SuperRare />
			<Release />
			{/* <Like /> */}
			<SignUp />
		</div>
	);
}
