import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PlanetSingle = () => {

    const params = useParams();

    const [planets, setPlanets] = useState();

    useEffect(() => {
        fetchOnePlanet()
    },[])

    const fetchOnePlanet = () => {
        fetch("https://www.swapi.tech/api/planets/" + params.uid, {
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
            setPlanets(data.result);
        })
        .catch(error => {
            //error handling
            console.log(error);
        });
    }

    return(
        <div className="mt-5">
            {planets ? (
                <div class="card w-75 text-bg-dark">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/image_51705c58.jpeg" class="card-img" alt="..."/>
                    <div class="card-img-overlay p-5">
                        <h1 class="card-title">{planets.properties.name}</h1>
                        <p className="cardItem lh-lg"><strong>Population: </strong>{planets.properties.population}</p>
                        <p className="cardItem lh-lg"><strong>Climate: </strong>{planets.properties.climate}</p>
                        <p className="cardItem lh-lg"><strong>Terrain: </strong>{planets.properties.terrain}</p>
                        <p className="cardItem lh-lg"><strong>Surface Water: </strong>{planets.properties.surface_water}</p>
                        <p className="cardItem lh-lg"><strong>Rotation period: </strong>{planets.properties.rotation_period}</p>
                        <p className="cardItem lh-lg"><strong>Rotation period: </strong>{planets.properties.orbital_period}</p>
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

export default PlanetSingle;