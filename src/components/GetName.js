import React from 'react'
import React from 'react'



function GetName(props){

return(
    <div className ="card w-50 mx-auto ">
        <div className="card-header">
        <h4> {props.name.name}</h4>
        </div>
        <div className="card-body">
        <h5>Coin:{props.name.coin} </h5>
        </div>
    </div>    
    
)
}
export default GetName;