import React from 'react'
import { transactionState } from '../Types/expense_types';
import {useAppDispatch } from '../app/hooks';
import {
    deleteTransaction,
  } from '../features/counter/counterSlice';


export const Transac: React.FC<transactionState> = ({ amount, text, id }) => {
    const dispatch = useAppDispatch();
    return (
        <li>
            <span>{text}</span>
            <span>{amount}</span>
            <button onClick={() => dispatch(deleteTransaction(id))} className='btnX'>X</button>
        </li>
    )
}