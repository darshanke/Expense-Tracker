import React, { useEffect } from "react";
import styles from "./Card.module.css";
import Button from "../Buttons/Button";

const Card = ({
  variant = "primary",
  headingName,
  amount,
  setAmount,
  buttonName,
  addBalance,
  expenseAmount,
  setExpenseAmount,
  expenseList,
  setExpenseList,
}) => {
 
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.heading}`}>
        {headingName}:{" "}
        <span className={`${styles[variant]}`}>
          {addBalance ? amount : expenseAmount}
        </span>
      </div>
      <Button
        variant={variant}
        addBalance={addBalance}
        amount={amount}
        setAmount={setAmount}
        expenseAmount={expenseAmount}
        setExpenseAmount={setExpenseAmount}
        expenseList={expenseList}
        setExpenseList={setExpenseList}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export default Card;
