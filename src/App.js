import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import About from "./ReactMenu/About";
import Contact from "./ReactMenu/Contact";
import Home from "./ReactMenu/Home";
import Service from "./ReactMenu/Service";
import Navbar from "./ReactMenu/Navbar";
import Fotter from "./Fotter";

const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/service" element={<Service />}></Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
			<Fotter />
		</>
	);
};

export default App;
