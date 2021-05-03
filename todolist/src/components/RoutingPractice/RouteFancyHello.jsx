import React from 'react';
import { Link } from '@reach/router';
import { useEffect, useState } from 'react';
const Home = (props) => {
    const pickme = props.color1, pickmetoo = props.color2;

    const helloStyle ={
        margin: '20px',
        backgroundColor: pickme,
        color: pickmetoo,
        height: "50px",
        width: "500px",
        display: 'block'
    }
  return (
      <div>
        
        <Link to = "/:id">Route Number </Link>
        <Link to = "/">Home </Link>
        <Link to = "/hello/:color1/:color2">Hello Again </Link>
        <div style = { helloStyle } >Hello</div>
      </div>
  );
}
export default Home;