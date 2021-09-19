import React,{useState} from 'react'


export default function FormHandler(props){
console.log(props,"PRops checks 1   ");

const [data, loopData]=useState([
    {
        nameId: "sudin"
    }
]);

const handleFormSubmit = (e) => {


};

const handleChange =(e) => {

};

return(
<div>
<div className ="card w-50 mx-auto mt-4">
                <div className="card-header">
                    <h2>Input Page Form</h2>
                </div>
                <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group mt-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value="name"
                        name = "name"
                    /> 
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div></div>

</div>
);
}

