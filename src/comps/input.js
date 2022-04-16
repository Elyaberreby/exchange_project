
function Input({startExchangeInput, setStartExchangeInput, startCurrencyInput, setStartCurrencyInput}) {

  return (
    <div className="input">
        <input type="number" value={startExchangeInput} onChange={(e) => setStartExchangeInput(e.target.value)}/>
        <select value={startCurrencyInput} name="startCurrency" onChange={(e) => setStartCurrencyInput(e.target.value)}>
        <option value="USD">USD</option>
        <option value="ILS">ILS</option>
        <option value="THB">THB</option>
        <option value="BTC">BTC</option>
        <option value="EUR">EUR</option>
        </select>
    </div>
  )
}

export default Input