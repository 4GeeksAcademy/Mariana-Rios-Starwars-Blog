import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/about.css"; 


const About = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()

    const item = store[`${params.type}`][`${params.id}`]
    return(
        <div className="abtPage container">
            <div className="row topAbtPage container">
                <div className="col-4 abtImgBox">
                    <img src={`https://starwars-visualguide.com/assets/img/${params.type}/${Number(params.id) + 1}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}} 
                        className="card-img-top" alt="..."/>
                    </div>
                    <div className="col-8 topText">
                        <h1>{item?.name}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
            </div>
            <hr></hr>
            {params.type === "characters" ? (
                <>
                <div className="abtInfo">
                    <p>Height: {item?.height} cm</p>
                    <p>Mass: {item?.mass} kg</p>
                    <p>Hair Color: {item?.hair_color}</p>
                    <p>Eye Color: {item?.eye_color}</p>
                    <p>Birth Year: {item?.birth_year}</p>
                    <p>Gender: {item?.gender}</p>
                </div>
                </>
            ) : null}

            {params.type === "planets" ? (
                <>
                <div className="abtInfo">
                    <p>Rotation Period: {item?.rotation_period}</p>
                    <p>Orbital Period: {item?.orbital_period}</p>
                    <p>Diameter: {item?.diameter}</p>
                    <p>Climate: {item?.climate}</p>
                    <p>Gravity: {item?.gravity}</p>
                    <p>Terrain: {item?.terrain}</p>
                    <p>Surface Water: {item?.surface_water}</p>
                    <p>Population: {item?.population}</p>
                </div>
                </>
            ) : null}

            {params.type === "starships" ? (
                <>
                <div className="abtInfo">
                    <p>Model: {item?.model}</p>
                    <p>Manufacturer: {item?.manufacturer}</p>
                    <p>Cost in Credits: {item?.cost_in_credits}</p>
                    <p>Length: {item?.length}</p>
                    <p>Max Atmosphering Speed: {item?.max_atmosphering_speed}</p>
                    <p>Crew: {item?.crew}</p>
                    <p>Passengers: {item?.passengers}</p>
                    <p>Cargo Capacity: {item?.cargo_capacity}</p>
                    <p>Consumables: {item?.consumables}</p>
                    <p>Hyperdrive Rating: {item?.hyperdrive_rating}</p>
                    <p>MGLT: {item?.MGLT}</p>
                    <p>Starship Class: {item?.starship_class}</p>
                </div>
                </>
            ) : null}

            {params.type === "vehicles" ? (
                <>
                <div className="abtInfo">
                    <p>Model: {item?.model}</p>
                    <p>Manufacturer: {item?.manufacturer}</p>
                    <p>Cost in Credits: {item?.cost_in_credits}</p>
                    <p>Length: {item?.length}</p>
                    <p>Max Atmosphering Speed: {item?.max_atmosphering_speed}</p>
                    <p>Crew: {item?.crew}</p>
                    <p>Passengers: {item?.passengers}</p>
                    <p>Cargo Capacity: {item?.cargo_capacity}</p>
                    <p>Consumables: {item?.consumables}</p>
                    <p>Vehicle Class: {item?.vehicle_class}</p>
                </div>
                </>
            ) : null}


        </div>
    )
}

export default About;
