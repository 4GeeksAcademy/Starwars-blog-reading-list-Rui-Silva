import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const Planets = () => {

    const navigate = useNavigate();

    const {store, actions} = useContext(Context);

    const [planetList, setPlanetList] = useState([]);

    useEffect(() => {
        fetchPlanets();
    },[]) 

    const fetchPlanets = () => {
        fetch("https://www.swapi.tech/api/" + store.planets, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            console.log(resp); // will try return the exact result as string
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        })
        .then(data => {
            //here is where your code should start after the fetch finishes
            console.log(data); //this will print on the console the exact object received from the server
            if (data && data.results) {
                setPlanetList(data.results); // Set the array of characters
            }
        })
        .catch(error => {
            //error handling
            console.log(error);
        });
    }

    const showPlanets = () => {
        return planetList.map((planets, index) => {
            return(
                <li className="card" key={index}>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg" className="card-img-top" alt="..."/>
                        <div className="card-content">
                            <p className="fw-bold fs-5">{planets.name}</p>
                        </div>
                    </div>
                    <div className="card-link-wrapper d-flex justify-content-between">
                        <a href="" 
                            className="card-link" 
                            onClick={() => navigate("/planetsingle/" + planets.uid )}
                        >View details</a>
                        <button type="button" class="btn btn-light p-0" onClick={() => {
                                actions.addFavorite(planets.name)
                            }}>
                            <i class="fab fa-gratipay fs-2" style={{color: "#ffa82e"}}></i>
                        </button>
                    </div>
                </li>
            )
        })
    }

    return(
        <div className="container">
            <h2>Planets</h2>
            <ul className="cards">
                {showPlanets()}
            </ul>
        </div>
    )
}

export default Planets;