import React, { useEffect, useState } from 'react'
import './Balance.css'
import BalanceData from './BalanceData'


const Balance = () => {

//   const [bal_data,setBal_data]  = useState([{}])
//   useEffect = (()=>{
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({"userId":"23456"})
//     };
//     fetch('http://10.230.7.54:8082/getTransactionsByUser', requestOptions)
//         .then(response => response.json())
//         .then((data) => {
//             console.log(data)
//           setBal_data(data)});

//   },[] ) 

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

    },
    {
        id:3,
        transaction_id:245359,
        type_of_transaction:'NetBanking',
        amount: 2000,
        cr_dr: 'debited',
        creation_date:'2022-11-9'

    },
    {
        id:4,
        transaction_id:245679,
        type_of_transaction:'BankAccount',
        amount: 9000,
        cr_dr: 'debited',
        creation_date:'2022-10-3'

    },
    {
        id:5,
        transaction_id:245679,
        type_of_transaction:'Service',
        amount: 1500,
        cr_dr: 'credited',
        creation_date:'2022-07-2'

    },
    {
        id:6,
        transaction_id:245679,
        type_of_transaction:'UPI',
        amount: 8000,
        cr_dr: 'debited',
        creation_date:'2022-12-6'

    },
    {
        id:7,
        transaction_id:245679,
        type_of_transaction:'UPI',
        amount: 8000,
        cr_dr: 'debited',
        creation_date:'2022-12-6'

    },
    {
        id:8,
        transaction_id:245679,
        type_of_transaction:'UPI',
        amount: 8000,
        cr_dr: 'debited',
        creation_date:'2022-12-6'

    },
    {
        id:9,
        transaction_id:245679,
        type_of_transaction:'UPI',
        amount: 8000,
        cr_dr: 'debited',
        creation_date:'2022-12-6'

    }

  ]  

  return (
    <div className='balance_container'>
        <div className='filter'>
                <form action="#">
                    <label for="trans">Type Of Transaction</label>
                    <select name="transaction" id="trans">
                        <option value="UPI">UPI</option>
                        <option value="NetBanking" >NetBanking</option>
                        <option value="Banktobank">Banktobank</option>
                    </select>
                    <label for="cred">Credited/Debited</label>
                    <select name="transaction" id="transaction">
                        <option value="Credited">Credited</option>
                        <option value="Debited">Debited</option>
                        
                    </select>
                    <label for="duration">Months</label>
                    <select name="duration" id="duration">
                        <option value="1m">Last_Month</option>
                        <option value="2m">Past 2 Months</option>
                        <option value="3m">Past 3 Months</option>
                        
                    </select>
                    
                    <input type="submit" value="Filter" />
            </form>
        </div>
        <h2 className='table-label'>Transactions</h2>
        <table className='table_body'>
            
            <thead>
                <tr>
                    <th>ID<i class='bx bx-filter-alt'></i></th>
                    <th>Transaction Id<i class='bx bx-filter-alt'></i></th>
                    <th>Type Of transaction<i class='bx bx-filter-alt'></i></th>
                    <th>Amount<i class='bx bx-filter-alt'></i></th>
                    <th>Cr/Dr<i class='bx bx-filter-alt'></i></th>
                    <th>Transaction Date<i class='bx bx-filter-alt'></i></th>
                   
                </tr>
                
            </thead>
            <tbody>
                <BalanceData bal_data={bal_data}/>
            </tbody>
        </table>
        <div className='spend_analysis'>
            <img src='./images/spend-chart.jpg' alt='spend-analysis'></img>
        </div>
        
        

    </div>
  )
}

export default Balance