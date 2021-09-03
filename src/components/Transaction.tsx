import React,{useState} from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  addTransaction,
  selectCount
} from '../features/counter/counterSlice';


export const Transaction = () => {

    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    let [text, settext] = useState('');
    let [Amount, setAmount] = useState(0);
    const oSubmit: React.FormEventHandler<HTMLFormElement> =(e) => {
            e.preventDefault(); 
            Amount=Number(Amount)
            let id = Math.floor(Math.random ()* 33383838);
            dispatch(addTransaction({
                amount: Amount,
                text : text,
                id: id
            }))
    }

    const textChange : React.ChangeEventHandler<HTMLInputElement>  = (e) => {
        settext(e.target.value)
    }

    return (
        <div className="transaction_container">
            <h2>Add new Transaction</h2>
            <hr/>
            <form  className="transaction-form" onSubmit={oSubmit}>
                <label>Enter Description
                <input type="text"  onChange={textChange} placeholder="Enter Desc..." required/>
                </label><br/>

                <label>Enter Amount
                <input type="number"   onChange={e => setAmount(Number(e.target.value))} placeholder="Enter Amount" required/>
                </label><br/>

                <input className="btn" type="submit" value="Add Transaction"/>
            </form>
        </div>
    )
}



