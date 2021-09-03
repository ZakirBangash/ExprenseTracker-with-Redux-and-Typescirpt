import { Expense_income } from "../utitlis/utitlis"

export const Balance = () => {
   
    let {total} = Expense_income();

    return (
        <div>
            <h3>Your Balance <br/> {total}</h3>
        </div>
    )
 }