import React from 'react';
import { Link } from '@reach/router';
const Home = (props) => {
  return (
      <div>
        
        <Link to = "/:id">Route Number </Link>
        <Link to = "/">Home </Link>
        <Link to = "/hello/:color1/:color2">Hello Again </Link>
        <h1>Hello</h1>
      </div>
  );
}
export default Home;

// import { useEffect, useState } from 'react';
// import { Router } from '@reach/router';
// // import axios from 'axios';
// import './App.css';
// import RouteHome from './components/RouteHome';
// import RouteNumber from './components/RouteNumber';
// import RouteHello from './components/RouteHello';
// import RouteFancyHello from './components/RouteFancyHello';



// function App() {

//   return (
//     <div className="App">
//         <Router>
//             <RouteHome path="/"/>
//             <RouteNumber path="/:id"/>
//             <RouteHello path="/hello"/>
//             <RouteFancyHello path ="/hello/:color1/:color2"/>
//         </Router>
//     </div>
//   );
// }


// export default App;