// import { async } from 'q';
import React, { useEffect, useState } from 'react'

export default function Input({amount,setAmount,coins,onSelectEndCoin,onSelectStartCoin}) {




  return (
    <div className='mx-auto col-md-6 text-center'>
      <h3>enter amount</h3>
      <input value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <h3>selct coin type</h3>
      <select onChange={(e)=>onSelectStartCoin(e.target.value)}>
        {coins.map(item => {
          return (
            <option value={item.substr(0,3)} key={item}>{item.substr(0,3)}</option>
          )
        })}
      </select>
      <h3>selct coin type to convert</h3>
      <select onChange={(e)=>
        onSelectEndCoin(e.target.value)}>
      {coins.map(item => {
          return (
            <option value={item.substr(3)} key={item}>{item.substr(3)}</option>
          )
        })}
      </select>
    </div>
  )

}

