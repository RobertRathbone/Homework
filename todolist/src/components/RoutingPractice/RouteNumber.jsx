import React from 'react';
import { Link } from '@reach/router';
const Home = (props) => {
  return (
      <div>
        
        <Link to = "/:id">Route Number </Link>
        <Link to = "/">Home </Link>
        <Link to = "/hello/:color1/:color2">Hello Again </Link>
        <h1>Hello and welcome to {props.id} </h1>
      </div>
  );
}
export default Home;