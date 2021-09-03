// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpense } from './components/IncomeExpense';
import { Transaction } from './components/Transaction';
import { TransactionList } from './components/TransactionList';

import { useAppSelector, useAppDispatch } from './app/hooks';

import {
  addTransaction,
  selectCount
} from './features/counter/counterSlice';


function App() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div className="container">
    <Header />
    <Balance />
    <div className="expensein"> 
      <IncomeExpense />
    </div>
    <TransactionList />
    <div className="trans">
      <Transaction />
    </div>
  </div>
  );
}

export default App;
