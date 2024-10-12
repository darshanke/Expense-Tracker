import React from 'react'
import styles from '../RecentTranansaction/RecentTransaction.module.css'
import BarGraph from './BarGraph'
import style from './BarGraph.module.css'

const BarGraphContent = ({ expenseList={expenseList},
   setExpenseList={setExpenseList}}) => {
  return (
    <div>
        <div className={styles.name}>
            Top Expenses
        </div>
            <div className={style.container}>
                <BarGraph expenseList={expenseList}/>
            </div>
    </div>
  )
}

export default BarGraphContent