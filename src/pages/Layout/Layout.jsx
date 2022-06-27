import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../../components/NavBar/Navbar";
					// import ScrollToTop from "../HomePage/ScrollToTop";
import Footer from "../HomePage/Footer";

export default function Layout({ changeTheme, theme }) {
	return (
		<div>

			{/* <ScrollToTop /> */}

			<NavBar changeTheme={changeTheme} currentTheme={theme} />

							{/* <div className="link btn" onClick={ScrollToTop}>
								Scroll to bottom 
							</div> */}

			<Outlet />

			<Footer />
		</div>
	);
}
