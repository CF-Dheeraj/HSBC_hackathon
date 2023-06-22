import React from 'react'
import { Link} from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard_container'>
        <div className='dashboard_body'>
            <div className='card-grids'>
                <Link to='/balance_sheet'>
                    <div className="card">
                        <img src="./images/balance_sheet_pic.jpg" alt="balnce-sheet-image" />
                        <h1>Spending Analysis</h1>
                        <p className="title">Will provide you all the transactions</p>
                        <p>Balance Sheet</p>
                    </div>
                </Link>
                <Link to='/balance_sheet'>
                    <div className="card">
                        <img src="./images/invest-pic.jpg" alt="balnce-sheet-image" />
                        <h1>Invest</h1>
                        <p className="title">Secure your future,Start Today</p>
                        <p>Demat,Mutual Fund</p>
                    </div>
                </Link>
                <Link to='/card_trend'>
                    <div className="card">
                        <img src="./images/card-pic.jpg" alt="balnce-sheet-image" />
                        <h1>Cards</h1>
                        <p className="title">Credit card vs UPI</p>
                        <p>Debit, Credit cards</p>
                    </div>
                </Link>
                <Link to='/balance_sheet'>
                    <div className="card">
                        <img src="./images/balance_sheet_pic.jpg" alt="balnce-sheet-image" />
                        <h1>Borrow</h1>
                        <p className="title">Will provide you all the transactions</p>
                        <p>Balance Sheet</p>
                    </div>
                </Link>

                <Link to='/balance_sheet'>
                    <div className="card">
                        <img src="./images/balance_sheet_pic.jpg" alt="balnce-sheet-image" />
                        <h1>Fixed Deposit</h1>
                        <p className="title">Will provide you all the transactions</p>
                        <p>Balance Sheet</p>
                    </div>
                </Link>

                <Link to='/balance_sheet'>
                    <div className="card">
                        <img src="./images/balance_sheet_pic.jpg" alt="balnce-sheet-image" />
                        <h1>Analysis</h1>
                        <p className="title">Will provide you all the transactions</p>
                        <p>Balance Sheet</p>
                    </div>
                </Link>
            
            </div>

        </div>
        
    </div>
  )
}

export default Dashboard