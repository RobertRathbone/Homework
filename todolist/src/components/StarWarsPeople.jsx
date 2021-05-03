import React from 'react';
import { Link } from '@reach/router';
import { useEffect, useState } from 'react';

const StarWarsPeople = (props) => {
    const [starWarsPerson, setStarWarsPerson] = useState("");

    const peopleFetch = (id) =>
        fetch("https://swapi.dev/api/people/1/")
            .then(response => {
                console.log(response.json());
                return response.json();
            }).then(response => {
                console.log(response.results, id);
                setStarWarsPerson(response.results);
            }).catch(err=>{
                console.log(err);
            });
    
    return (
        <div>
            Yo {starWarsPerson}

        </div>
    )


}
export default StarWarsPeople;