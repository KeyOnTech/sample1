import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
// import logo from "../../assets/kot2_48x48.png";
// import logo from "../../assets/ic_kot_1_round.png";
import logo from "../../assets/nft-2.png";

// export default function Navbar(props) {
export default function Navbar({ changeTheme, currentTheme }) {
	const [navState, setNavState] = useState(false);
	return (
		<nav>

			<div className="brand-container">
				<div className="brand">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<div className="toggle-container">
					<div className="toggle">
						{
						navState 
						?
							<MdClose onClick={()=>setNavState(false)} />
						:
							<GiHamburgerMenu onClick={()=>setNavState(true)} />
						}
					</div>
					<div 
						className="mode"
						// onClick={() => changeTheme()}
						onClick={changeTheme}
					>
						{/* {props.currentTheme === "dark" ? ( */}
						{currentTheme === "dark" ? (
							<ImSun className="light" />
						) : (
							<BsFillMoonFill className="dark" />
						)}
					</div>
				</div>
			</div>

			{/* <div className="links-container"> */}
			<div className={`links-container ${
				navState ? "nav-visible" : ""
			}`}>
				<ul className="links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="nft1">Features</Link>
					</li>
					<li>
						<Link to="nft2">About</Link>
					</li>
					<li>
						<Link to="nft1">Launch</Link>
					</li>
					<li>
						<Link to="nft2">Sign Up</Link>
					</li>

					{/* // 2a - toggle light / dark mode */}
					{/* <li onClick={() => props.changeTheme()}> */}
					{/* <li onClick={() => changeTheme()}> */}
					<li onClick={changeTheme}>
						{/* {props.currentTheme === "dark" ? ( */}
						{currentTheme === "dark" ? (
							<ImSun className="light" />
						) : (
							<BsFillMoonFill className="dark" />
						)}
					</li>
					{/* // 2a - toggle light / dark mode */}
				</ul>
			</div>


			{/* <Outlet /> */}

		</nav>
	);
}
