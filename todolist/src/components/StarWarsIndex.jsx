import React from 'react';
import { Link } from '@reach/router';
import { useNavigate } from "@reach/router"
// import Dropdown from 'react-bootstrap/Dropdown';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const StarWarsIndex = (props) => {
    const options = [
        'people', 'planets', 'starships'
      ];

    const navigate = useNavigate();

    // const [pickId, setPickId] = useState ("");

    const defaultOption = options[0];

    const dropDownHandler = (e) => {
        e.preventDefault();
        if (options ==='people'){
            navigate(`/people/${id}`)
        }
        if (options === 'planets'){
            navigate(`/planets/${id}`)
        }
        if (options === 'starships'){
            navigate(`/starships/${id}`)
        }
    }

    let id = 0;

    const menuStyle = {        
        margin: '20px',
        height: '50px',
        width: '120px',
        display: 'inline-block',
        // backgroundColor: 'blue',
    }




    // const peopleFetch = (id) =>
    //     fetch("https://swapi.dev/api/people/:id/")
    //         .then(response => {
    //             return response.json();
    //         }).then(response => {
    //             console.log(response.results);
    //             setStarWarsPerson(response.results);
    //         }).catch(err=>{
    //             console.log(err);
    //         });


  return (
      <div style = { menuStyle }>
         <Dropdown options={options}  value={defaultOption} placeholder="Select an option" /> 
          {/* <form onSubmit={dropDownHandler}>
                <input type="text"  value={id} />
                <button tyoe="submit"></button>
            </form> */}
        <form inline onSubmit={dropDownHandler}>
            <input type="text" value="id" />
        <input type="submit" />
        </form>


        
        {/* <Link to = "/:id">Route Number </Link>
        <Link to = "/">Home </Link>
        <Link to = "/hello/:color1/:color2">Hello Again </Link>
        <h1>Hello</h1> */}
      </div>
  );
}
export default StarWarsIndex;

// Star Wars App

// import { useEffect, useState } from 'react';
// import { Router } from '@reach/router';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import axios from 'axios';
// import './App.css';
// import StarWarsIndex from './components/StarWarsIndex';
// import StarWarsPeople from './components/StarWarsPeople';
// import StarWarsPlanets from './components/StarWarsPlanets';
// import StarWarsStarships from './components/StarWarsStarships';





// function App() {

//   return (
//     <div className="App">
//         <Router>
//             <StarWarsIndex path="/"/>
//             <StarWarsPeople path="/people/:id"/>
//             <StarWarsPlanets path="/plates/:id"/>
//             <StarWarsStarships path="/starships/:id"/>


//         </Router>
//     </div>
//   );
// }


// export default App;








//practice dropdown stuff
{/* <Dropdown>
<Col xs ={3}>
<Dropdown.Toggle variant="success" id="dropdown-basic">
    Star Wars
</Dropdown.Toggle>

<Dropdown.Menu>
    <Dropdown.Item href="/people/:id">People</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Planets</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Starships</Dropdown.Item>
</Dropdown.Menu>
</Col>
</Dropdown>

<Form>
<Form.Row>
<Col xs={1}>
<Form.Control placeholder="ID#" />
</Col>
</Form.Row>
    <Button type="submit" className="mb-2">
        Submit
    </Button>
</Form> */}

// onChange={this._onSelect}
// onChange={e => setPickId(e.target.value)}