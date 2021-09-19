import React from 'react'
import App from './App'
import {Switch } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'; 
import Navbar from './components/NavBar';
import {ToastContainer} from 'react-toastify';



function Routing(){
    return(
        <React.Fragment>
            
            <BrowserRouter>
            <Navbar />
            <Switch>
                <App />
            </Switch>
       
            </BrowserRouter>
        
       
        
        <ToastContainer/>
       
        </React.Fragment>
    );
}
export default Routing;
