import React from 'react'

const BalanceData = ({bal_data}) => {
  return (
    <>
        {
            bal_data.map((data)=>{
                const {id,transaction_id,type_of_transaction,amount,cr_dr,creation_date} = data;

                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{transaction_id}</td>
                        <td>{type_of_transaction}</td>
                        <td>{amount}</td>
                        <td>{cr_dr}</td>
                        <td>{creation_date}</td>
                    </tr>
                )
            })
        }
    </>
  )
}

export default BalanceData