import React, { useState } from "react";
import styles from "./Buttons.module.css";
import AddExpenseorAddBalance from "../Modals/AddExpenseorAddBalance";

const Button = ({
  variant = "primary",
  children,
  addBalance,
  amount,
  setAmount,
 expenseAmount,
 setExpenseAmount,
 expenseList,
 setExpenseList,
 item,
 editTrans,
 indexofItem
}) => {
  // console.log(item,indexofItem,expenseList);
  const [show, setShow] = useState(false);
  const handleModalToggle = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <>
      <button
        className={`${styles.btn} ${styles[variant]}`}
        onClick={handleModalToggle}
      >
        {children}
      </button>
      <AddExpenseorAddBalance
        isOpen={show}
        onRequestClose={handleModalToggle}
        addBalance={addBalance}
        setAmount={setAmount}
        amount={amount}
        expenseAmount={expenseAmount}
        setExpenseAmount={setExpenseAmount}
        expenseList={expenseList}
        setExpenseList={setExpenseList}
        item={item}
        editTrans={editTrans}
        indexofItem={indexofItem}
      />
    </>
  );
};

export default Button;
