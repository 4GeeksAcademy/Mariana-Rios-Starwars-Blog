import React, { useContext } from "react";
import "../../styles/home.css";

import Card from "../component/card"
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context)
	return (
		<div className="text-center mt-5 container">
			<h2>Characters</h2>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.characters.map((item, i) => {
					return(
						<Card item={item} id={i} type={"characters"} key={i}/>
					)
				})}
			</div>
			<h2>Planets</h2>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.planets.map((item, i) => {
					return(
						<Card item={item} id={i} type={"planets"} key={i}/>
					)
				})}
			</div>
			<h2>Starships</h2>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.starships.map((item, i) => {
					return(
						<Card item={item} id={i} type={"starships"} key={i}/>
					)
				})}
			</div>
			<h2>Vehicles</h2>
			<div className="row flex-row flex-nowrap overflow-auto">
				{store.vehicles.map((item, i) => {
					return(
						<Card item={item} id={i} type={"vehicles"} key={i}/>
					)
				})}
			</div>
		</div>
	)
};
