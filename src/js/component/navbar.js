import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar-light bg-light mb-3">
			<nav className="navbar navbar-light bg-light container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" style={{width: "5rem"}}/></span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((item, i) => {
								return(
									<li className="navbar px-1"><div>{item}</div> <div onClick={() => actions.deleteFavorite(i)}><i className="fa-solid fa-trash-can"></i></div></li>
								)
							})}
						</ul>
					</div>
				</div>
			</nav>
		</nav>
	);
};
