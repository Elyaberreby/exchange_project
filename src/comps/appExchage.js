import React,{useState,useEffect} from 'react'
import { getCoinListApi } from '../api/Api';
import Input from './input'
import Output from './output'

const defaultCoins=["USD","ILS","BTC","EUR","THB"]

export default function AppExchage() {
  const [coinsAr, setCoinsAr] = useState({});
  const [amount, setAmount] = useState(1);

  const [startCoin, onSelectStartCoin] = useState("USD");
  const [endCoin, onSelectEndCoin] = useState("ILS");
  

  

  useEffect(() => {
      getCoinListApi(setCoinsAr);

  }, []);

  console.log(coinsAr)
  return (
    <>
      <div className='container'>
        <div>
          <Input amount={amount} setAmount={setAmount} coins={Object.keys(coinsAr)} onSelectStartCoin={onSelectStartCoin} onSelectEndCoin={onSelectEndCoin} />
        </div>
        <div>
          <Output amount={amount} coinS={startCoin} total={amount *coinsAr[startCoin+endCoin]} coinE={endCoin} />
        </div>
      </div>
    </>
  )
}
