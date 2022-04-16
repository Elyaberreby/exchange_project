import React, {useState} from 'react';
import './App.css';
import ExchangeApp from './comps/ExchangeApp';

function App() {
  
  const [time, setTime] = useState()
  const updateTime = () =>{
    const date = new Date().toLocaleString()
    setTime(date)
  }

  setInterval(updateTime, 1000)

  return (
    <>
      <h2>Exchange</h2>
      <fieldset draggable="true">
        <ExchangeApp/>
        <h3>current time: {time}</h3>
      </fieldset>
    </>
  )
}

export default App;
