import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar() {
    return(
    <div className= "container" > 
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
       <ul className="navbar-nav mr-auto">
       <li className="nav-item">
             <Link className="nav-link" to='/'>Home</Link>
         </li>
         <li className="nav-item">
           
             <Link className="nav-link" to='/about'>Create</Link>
             
         </li>
       <li className="nav-item">
            <Link className="nav-link" to='/service'>Review</Link>
             
        </li>
      </ul>
      </div>
      </nav>
      </div>
    
    );
}
    



// <ul>
//         <li>
//             {" "}
//             <Link to='/'>Home</Link>
//             {" "}
//         </li>
//         <li>
//             {" "}
//             <Link to='/about'>About</Link>
//             {" "}
//         </li>
//     </ul>