import React, {useState} from 'react';

import './App.css';

function App() {

  const[isRed, setRed]= useState(false);
  const[count, setCount] = useState(0);

  const[user, setuser]=useState({
    ime:"Ranko Stajic",
    godine:19,
    objave:["golman", "Bajern Minhen"]
  })

  const increment = ()=>{
    setCount(count+1);
    setRed(!isRed);

  }
  return (
    <div className="app">
      <h2 className={isRed ? "red" : ""}>Naslov koji menja boju</h2>
      <button onClick={increment}>Uvecaj</button>
      <h1>{count}</h1>
      
    </div>
  );
}

export default App;
