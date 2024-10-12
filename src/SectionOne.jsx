import React, { useEffect, useState } from "react";
import style from "./SectionOne.module.css";
import Card from "./Components/Card/Card";
import PieCharts from "./Components/PieChart/PieChart";

const SectionOne = ({expenseList,setExpenseList , amount , setAmount , expenseAmount, setExpenseAmount }) => {


  useEffect(() => {
    let getAmount = localStorage.getItem("balance");
    if (getAmount) {
      setAmount(Number(getAmount));
    }
    let getExpense = localStorage.getItem("expense");
    if (getExpense) {
      setExpenseAmount(Number(getExpense ));
    }

  }, []);

  return (
    <div className={`${style.Sectionone}`}>
      <div className={`${style.name}`}>Expense Tracker</div>
      <div className={`${style.herosection}`}>
        <Card
          variant="primary"
          headingName="Wallet Balance"
          amount={amount}
          setAmount={setAmount}
          buttonName="+ Add Income"
          addBalance={true}
        />
        <Card
          variant="secondary"
          headingName="Expense"
          setAmount={setAmount}
          amount={amount}
          buttonName="+ Add Expense"
          addBalance={false}
          expenseAmount={expenseAmount}
          setExpenseAmount={setExpenseAmount}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
      

        /> 
        <PieCharts  expenseList={expenseList}/>
      </div>
    </div>
  );
};

export default SectionOne;
