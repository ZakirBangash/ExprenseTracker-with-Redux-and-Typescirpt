 import { selectCount } from '../features/counter/counterSlice'
 import { useAppSelector } from '../app/hooks'


 export const Expense_income = () => {

   
     const transaction = useAppSelector(selectCount);

     let Amount  = transaction.map(Transaction => Transaction.amount)
     const income = Amount.filter(item => item > 0).reduce( (acc,item) => (acc+=item),0).toFixed(2);
     let expense = Amount.filter(item => item < 0).reduce( (acc,item)=> (acc+=item),0).toFixed(2);
     const total = Amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
     return({
         income,
         expense,
         total
     }
     ) 
 }