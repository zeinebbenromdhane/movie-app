import logo from './logo.svg';
import './App.css';
import{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {movies} from './data' ;

function App() {
  const [count , setCount] = useState (0);
  const handleIncrement =()=>{
    setCount(count+1)
  }
  const handleDecrement =()=>{
    count && setCount(count-1)
  }
  return (
    <div className="App">
    <button onClick={handleIncrement}></button>
    <h1>{count}</h1>
      <button onClick={handleDecrement}></button>
    </div>
  );
}

export default App;
