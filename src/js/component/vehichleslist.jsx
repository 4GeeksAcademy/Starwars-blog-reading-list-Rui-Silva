import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/lists.css";

const Vehichles = () => {

    const navigate = useNavigate();

    const {store, actions} = useContext(Context);

    const [planetList, setVehicleList] = useState([]);

    useEffect(() => {
        fetchVehicles();
    },[]) 

    const fetchVehicles = () => {
        fetch("https://www.swapi.tech/api/" + store.vehicles, {
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
                setVehicleList(data.results); // Set the array of characters
            }
        })
        .catch(error => {
            //error handling
            console.log(error);
        });
    }

    const showVehicles = () => {
        return planetList.map((vehicles, index) => {
            return(
                <li className="card" key={index}>
                    <div>
                        <img src="https://www.cnet.com/a/img/resize/8364177c9fdeddb3a35b8434a164b6f29619bd93/hub/2015/02/05/11b50968-7eef-47da-a344-33ebe0d18be0/star-wars-vehicles-at-at.jpg?auto=webp&width=1200" className="card-img-top" alt="..."/>
                        <div className="card-content">
                            <p className="fw-bold fs-4">{vehicles.name}</p>
                        </div>
                    </div>
                    <div className="card-link-wrapper d-flex justify-content-between">
                        <a href="" 
                            className="card-link" 
                            onClick={() => navigate("/vehiclesingle/" + vehicles.uid )}
                        >View details
                        </a>
                        <button type="button" class="btn btn-light p-0" onClick={() => {
                                actions.addFavorite(vehicles.name)
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
            <h2>Vehichles</h2>
            <ul className="cards">
                {showVehicles()}
            </ul>
        </div>
    )
}

export default Vehichles;