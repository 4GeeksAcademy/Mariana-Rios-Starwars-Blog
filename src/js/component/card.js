import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Card = (props) => {
    const { store, actions } = useContext(Context);
    
    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}} 
                className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.item.name}</h5>
                {props.type === "characters" ? (
                    <>
                    <p className="card-text">Height: {props.item.height} cm</p>
                    <p className="card-text">Eye Color: {props.item.eye_color}</p>
                    <p className="card-text">Hair Color: {props.item.hair_color}</p>
                    </>
                ) : null}
                {props.type === "planets" ? (
                    <>
                    <p className="card-text">Terrain: {props.item.terrain}</p>
                    <p className="card-text">Climate: {props.item.climate}</p>
                    <p className="card-text">Population: {props.item.population}</p>
                    </>
                ) : null}
                {props.type === "starships" ? (
                    <>
                    <p className="card-text">Model: {props.item.model}</p>
                    <p className="card-text">Max Speed: {props.item.max_atmosphering_speed}</p>
                    <p className="card-text">Cost: {props.item.cost_in_credits}</p>
                    </>
                ) : null}
                {props.type === "vehicles" ? (
                    <>
                    <p className="card-text">Model: {props.item.model}</p>
                    <p className="card-text">Max Speed: {props.item.max_atmosphering_speed}</p>
                    <p className="card-text">Cost: {props.item.cost_in_credits}</p>
                    </>
                ) : null}
                <div className="d-flex justify-content-between">
                    <Link to={"/about/" + props.type + "/" + props.id}>
                        <span className="btn btn-primary">Learn More!</span>
                    </Link>
                    <button className="btn btn-outline-warning" onClick={() => {actions.addToFavs(props.item.name)}}>
                        <i className={"fa-heart " + (store.favorites.includes(props.item.name) ? "fa-solid" : "fa-regular")}></i>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card;