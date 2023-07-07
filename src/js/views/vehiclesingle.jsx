import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const VehicleSingle = () => {

    const params = useParams();

    const [vehicles, setVehicles] = useState();

    useEffect(() => {
        fetchOneVehicle()
    },[])

    const fetchOneVehicle = () => {
        fetch("https://www.swapi.tech/api/vehicles/" + params.uid, {
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
            setVehicles(data.result);
        })
        .catch(error => {
            //error handling
            console.log(error);
        });
    }

    return(
        <div>
            {vehicles ? (
                <div class="card w-75 text-bg-dark">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/at-m6-walker-main_99ddc753.jpeg?region=0%2C0%2C1560%2C878" class="card-img" alt="..."/>
                    <div class="card-img-overlay p-5">
                        <h1 class="card-title">{vehicles.properties.name}</h1>
                        <p className="cardItem lh-lg"><strong>Model: </strong>{vehicles.properties.model}</p>
                        <p className="cardItem lh-lg"><strong>Cargo Capacity: </strong>{vehicles.properties.cargo_capacity}</p>
                        <p className="cardItem lh-lg"><strong>Passengers: </strong>{vehicles.properties.passengers}</p>
                        <p className="cardItem lh-lg"><strong>Atmospher Speed </strong>{vehicles.properties.max_atmosphering_speed}</p>
                        <Link to="/" >Home</Link>
                    </div>
                </div>
            ) : (
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                </div>
            )}
        </div>
    )
}

export default VehicleSingle;