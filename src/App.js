import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useEffect } from 'react';

function App() {


  useEffect(()=>{
    localStorage.setItem('balance', localStorage.getItem('balance')|| '5000')
    localStorage.setItem('expense', localStorage.getItem('expense')|| '0')
  },[])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
