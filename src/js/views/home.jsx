import React from "react";
import Characters from "../component/characterslist.jsx";
import Planets from "../component/planetslist.jsx";
import Vehichles from "../component/vehichleslist.jsx";

const Home = () => {
	return(
		<div>
			<Characters />
			<Planets />
			<Vehichles />
		</div>
)};

export default Home;