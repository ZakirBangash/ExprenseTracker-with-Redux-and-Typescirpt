// import React,{useContext} from 'react'
// import {GlobalContext} from './GlobalState'
 import { Transac } from './Transac';
 import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  addTransaction,
  selectCount
} from '../features/counter/counterSlice';



export const TransactionList = () => {
    // const {transactions} = useContext(GlobalContext);
    const transactions = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    
    
    return (
        <div>
        <h2>History</h2>
        <hr/>
        <ul className="transaction">
         {transactions.map((transaction,id) => ( <Transac key={id} text={transaction.text} amount={transaction.amount} id={transaction.id} />
                ))}
        
            {/* <Transac  /> */}
            
        </ul>

        </div>
    )
}