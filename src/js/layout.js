import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/home.jsx";
import injectContext from "./store/appContext";
import CharacterSingle from "./views/charactersingle.jsx";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import PlanetSingle from "./views/planetsingle.jsx";
import VehicleSingle from "./views/vehiclesingle.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/charactersingle/:uid" element={<CharacterSingle />} />
					<Route path="/planetSingle/:uid" element={<PlanetSingle />} />
					<Route path="/vehiclesingle/:uid" element={<VehicleSingle />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
