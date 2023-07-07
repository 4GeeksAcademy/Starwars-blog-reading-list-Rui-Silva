import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CharacterSingle = () => {
    
    const params = useParams();

    const [people, setPeople] = useState();

    useEffect(() => {
        fetchOneCharacter()
    },[])

    const fetchOneCharacter = () => {
        fetch("https://www.swapi.tech/api/people/" + params.uid, {
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
            setPeople(data.result);
        })
        .catch(error => {
            //error handling
            console.log(error);
        });
    }

    return(
        <div className="mt-5">
            {people ? (
                <div className="card mb-3" style={{width: "100%"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://theouterhaven.b-cdn.net/wp-content/uploads/2022/02/Luke-Skywalker-Header.jpg" class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{people.properties.name}</h1>
                                <p className="cardItem lh-lg"><strong>Birth Year: </strong>{people.properties.birth_year}</p>
                                <p className="cardItem lh-lg"><strong>Height: </strong>{people.properties.height}</p>
                                <p className="cardItem lh-lg"><strong>Gender: </strong>{people.properties.gender}</p>
                                <p className="cardItem lh-lg"><strong>Hair Color: </strong>{people.properties.hair_color}</p>
                                <p className="cardItem lh-lg"><strong>Eye Color: </strong>{people.properties.eye_color}</p>
                            </div>
                        </div>
                        <Link to="/" type="button" className="btn btn-success mt-2">Home</Link>
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

export default CharacterSingle;