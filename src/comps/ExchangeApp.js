import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Input from './Input'
import Output from './Output'

function ExchangeApp() {
    
    const [startCurrencyInput, setStartCurrencyInput] = useState("USD")
    const [endCurrencyInput, setEndCurrencyInput] = useState("ILS")
    const [startExchangeInput, setStartExchangeInput] = useState(0)
    const [endExchangeInput, setEndExchangeInput] = useState(0)
    const [exchangesRate, setExchangesRate] = useState()

    const fetchData = async () => {
        try {
        const URI = "https://api.currencyapi.com/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b"
        const result = await axios.get(URI)
        setExchangesRate(result.data.data)
        } catch(err) {
            console.log(err)
        }
    }

    const exchange = () => {
        const sum = (startExchangeInput / exchangesRate[startCurrencyInput] * exchangesRate[endCurrencyInput]).toFixed(3)
        setEndExchangeInput(sum)
    }
    
    const swap = () => {
        const data = {startCurrencyInput, endCurrencyInput, startExchangeInput, endExchangeInput}
        setEndCurrencyInput(data.startCurrencyInput)
        setStartCurrencyInput(data.endCurrencyInput)
        setEndExchangeInput(data.startExchangeInput)
        setStartExchangeInput(data.endExchangeInput)
    }

    useEffect(() => fetchData(), [])

  if(exchangesRate) return (
    <>
            <legend>ExchangeApp</legend>
            <Input endExchangeInput={endExchangeInput} setEndExchangeInput={setEndExchangeInput} startExchangeInput={startExchangeInput} setStartExchangeInput={setStartExchangeInput} currencies={Object.keys(exchangesRate)} exchange={exchange} startCurrencyInput={startCurrencyInput} setStartCurrencyInput={setStartCurrencyInput} endCurrencyInput={endCurrencyInput} setEndCurrencyInput={setEndCurrencyInput}/>
            <Output endExchangeInput={endExchangeInput} setEndExchangeInput={setEndExchangeInput} startExchangeInput={startExchangeInput} setStartExchangeInput={setStartExchangeInput} currencies={Object.keys(exchangesRate)} exchange={exchange} startCurrencyInput={startCurrencyInput} setStartCurrencyInput={setStartCurrencyInput} endCurrencyInput={endCurrencyInput} setEndCurrencyInput={setEndCurrencyInput}/>
            <button className="exchange" onClick={() => exchange()}>exchange</button>
            <button className="swap" onClick={() => swap()}>swap</button>
            <b>result: {endExchangeInput} {endCurrencyInput}</b>
    </>
  )
  else return <b>Loading...</b>
}

export default ExchangeApp