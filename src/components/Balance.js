import React from 'react'
import './Balance.css'
import BalanceData from './BalanceData'


const Balance = () => {

  const bal_data = [
    {
        id:1,
        transaction_id:245678,
        type_of_transaction:'UPI',
        amount: 5000,
        cr_dr: 'credited',
        creation_date:'2022-12-8'

    },
    {
        id:2,
        transaction_id:245679,
        type_of_transaction:'UPI',
        amount: 8000,
        cr_dr: 'debited',
        creation_date:'2022-12-6'

    }
  ]  

  return (
    <div className='balance_container'>
        <table className='table_body'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Transaction Id</th>
                    <th>Type Of transaction</th>
                    <th>Amount</th>
                    <th>Cr/Dr</th>
                    <th>Creation Date</th>
                </tr>
                
            </thead>
            <tbody>
                <BalanceData bal_data={bal_data}/>
            </tbody>
        </table>
        

    </div>
  )
}

export default Balance