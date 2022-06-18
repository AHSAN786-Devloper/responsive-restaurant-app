import React from "react";
import { NavLink } from "react-router-dom";
import web from "../../src/images/img2.svg";
import Common from "./Common";

const Home = () => {
	return (
		<>
			<Common
				name="Grow Your Buisness With"
				imgsrc={web}
				visit="/service"
				btnName="Get Started"
			/>
		</>
	);
};

export default Home;
