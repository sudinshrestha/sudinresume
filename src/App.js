
import React from 'react'
import GetName from './components/GetName';

function App() {


const name=[
  {
  name: "sudin",
  coin: "fantom" 
  },
  {
    name: "amit",
    coin: "solano"
  },
  {
    name: "sasankh",
    coin: "ethereum"
  },
  {
    name: "dipesh",
    coin: "cardano"
  }
]

return(
  <div>
    {name.map((item)=>{
      return  <GetName name={item}/>
    })}
</div>
);

}


export default App;
