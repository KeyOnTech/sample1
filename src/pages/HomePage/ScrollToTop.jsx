// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { BsChevronUp } from "react-icons/bs";

// export default function ScrollToTop() {
// 	const [visible, setVisible] = useState(false);
// 	window.addEventListener("scroll", () => {
// 		window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
// 	});


// 	/////// 1- c
// 	const goTop = () => {
// 		window.scrollTo({
// 		  bottom: document.documentElement.scrollHeight,
// 		  behavior: 'smooth',
// 		});
// 	}
// 	/////// 1- c

// 	return (
// 		<div className={`scrollToTop ${visible ? "visible" : ""}`}>
// 			{/* <Link to="#"> */}

// 			{/* <div className="link btn" onClick={ScrollToTop}> */}
// 			<div className="link btn" onClick={goTop}>
// 			<BsChevronUp />

// </div>


// 			{/* <Link  onClick={ScrollToTop} > */}
// 			{/* <Link to="#">
// 				<BsChevronUp />
// 			</Link> */}
// 		</div>
// 	);
// }

// // export default function ScrollToTop() {
// // 	window.scrollTo({
// // 	  bottom: document.documentElement.scrollHeight,
// // 	  behavior: 'smooth',
// // 	});
// //   };
