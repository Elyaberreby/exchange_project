
function Output({endExchangeInput, endCurrencyInput, setEndCurrencyInput}) {

  return (
    <div className="input">
        <input type="number" value={endExchangeInput} readOnly/>
        <select value={endCurrencyInput} name="endCurrency" onChange={(e) => setEndCurrencyInput(e.target.value)}>
        <option value="USD">USD</option>
        <option value="ILS">ILS</option>
        <option value="THB">THB</option>
        <option value="BTC">BTC</option>
        <option value="EUR">EUR</option>
        </select>
    </div>
  )
}

export default Output