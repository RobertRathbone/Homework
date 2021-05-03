import React from 'react';
import { Link } from '@reach/router';
import { useEffect, useState } from 'react';

const StarWarsPlanets = (props) => {
    const [starWarsPerson, setStarWarsPerson] = useState("Jaba");

    const planetFetch = (id) =>
        fetch("https://swapi.dev/api/planets/:id/")
            .then(response => {
                return response.json();
            }).then(response => {
                console.log(response.results);
                setStarWarsPerson(response.results);
            }).catch(err=>{
                console.log(err);
            });
    
    return (
        <div>
            Yo

        </div>
    )


}
export default StarWarsPlanets;