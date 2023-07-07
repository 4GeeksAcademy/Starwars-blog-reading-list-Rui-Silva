import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="container navbar bg-light">
			<div className="">
				<a href="https://www.starwars.com/" target="_blank">
					<img className="image" src="https://visualpharm.com/assets/999/Star%20Wars-595b40b85ba036ed117db2ff.svg" alt="StarWars logo" />
				</a>				
			</div>
			<div className="">
				<div class="btn-group">
					<button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="dropdownMenuClickableInside" aria-expanded="false">
						Favorites <span className="bg-light rounded p-1 text-secondary text-center">{store.favorite.length}</span>
					</button>
					<ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="dropdownMenuClickableInside">
						{store.favorite.map((fav, index) => {
							return(
								<li key={index}>
									<a class="dropdown-item d-flex justify-content-between ps-2 pe-2" href="#">
										{fav}
										<i class="fas fa-trash pt-1"
											onClick={() => {
												actions.deleteFavorite(fav)
											}}
										></i>
									</a>
								</li>
							)})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;