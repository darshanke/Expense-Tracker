import React, { useEffect, useState } from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

const Home = () => {
  const [amount, setAmount] = useState(localStorage.getItem("balance"));
  const [expenseAmount, setExpenseAmount] = useState(
    localStorage.getItem("expense")
  );
  const [expenseList, setExpenseList] = useState(() => {
    const savedExpenses = localStorage.getItem("expenseList") || null;
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  useEffect(()=>{
    setExpenseList(()=> {
      const savedExpenses = localStorage.getItem("expenseList") || null;
    return savedExpenses ? JSON.parse(savedExpenses) : [];
    })
  },[])
  return (
    <div>
        <SectionOne expenseList={expenseList}
         setExpenseList={setExpenseList} 
        amount={amount}
        setAmount={setAmount}
        expenseAmount={expenseAmount}
        setExpenseAmount={setExpenseAmount}
        />
        <SectionTwo 
        expenseList={expenseList}
         setExpenseList={setExpenseList}
         amount={amount}
         setAmount={setAmount}
         expenseAmount={expenseAmount}
         setExpenseAmount={setExpenseAmount}
         />
    </div>
  )
}

export default Home