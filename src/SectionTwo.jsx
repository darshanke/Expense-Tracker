import React, { useEffect, useState } from 'react'
import styles from './SectionTwo.module.css';

import RecentTransaction from './Components/RecentTranansaction/RecentTransaction';
import BarGraphContent from './Components/BarGraphContent/BarGraphContent';

const SectionTwo = ({expenseList,setExpenseList,
         amount,
         setAmount,
         expenseAmount,
         setExpenseAmount,
 }) => {
  

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "expenseList") {
        const updatedList = event.newValue ? JSON.parse(event.newValue) : [];
        setExpenseList(updatedList); 
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <div className={styles.SectionTwo} > 
        <RecentTransaction  expenseList={expenseList}
         setExpenseList={setExpenseList}
        amount={amount}
        setAmount={setAmount}
        expenseAmount={expenseAmount}
        setExpenseAmount={setExpenseAmount}
        
        />
        <BarGraphContent expenseList={expenseList} setExpenseList={setExpenseList}/>
    </div>
  )
}

export default SectionTwo