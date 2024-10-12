import React, { useState } from "react";
import { VscEdit } from "react-icons/vsc";

import  './EditButton.css'
import AddExpenseorAddBalance from "../../Modals/AddExpenseorAddBalance";

function EditButton({
  variant='secondary',
  expenseList={expenseList},
  setExpenseList={setExpenseList},
  amount={amount},
  setAmount={setAmount},
  expenseAmount={expenseAmount},
  setExpenseAmount={setExpenseAmount},

  itemtoHandle
 }) {
  console.log(itemtoHandle);

  const [show, setShow] = useState(false);
  const handleModalToggle = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <button className="cancel" onClick={()=>{handleModalToggle()}}>
    <VscEdit  className="icon"/>
    
    </button>
   
  );
}

export default EditButton;
