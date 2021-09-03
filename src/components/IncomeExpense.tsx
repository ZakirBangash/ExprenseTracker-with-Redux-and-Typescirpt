import { Expense_income } from '../utitlis/utitlis'

export const IncomeExpense = () => {
let {income, expense } = Expense_income();
    return (
        <div className="Expense">
            <h3>Income <br /> <span className="incomeC">{income}</span></h3>
            <h3>Expense <br /> <span className="expenseC">{expense}</span></h3>
        </div>
    )
}