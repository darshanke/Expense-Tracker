import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import styles from "./AddExpenseorAddBalance.module.css";
import Button from "../Buttons/Button";
import { SnackbarProvider, useSnackbar } from "notistack";
import { ZAxis } from "recharts";

ReactModal.setAppElement("#root");

const AddExpenseorAddBalance = ({
  isOpen,
  onRequestClose,
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
  console.log(item,indexofItem, expenseList); // {
  //     "title": "10001",
  //     "price": 1000,
  //     "catagory": "Entertainment",
  //     "createdDate": "2024-10-08"
  // }
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [income, setIncome] = useState(localStorage.getItem("balance"));
  const [addAmount, setAddAmount] = useState("");
  const [title, setTitle] = useState(item?item.title:"");
  const [expense, setExpense] = useState(item && editTrans?item.price:'');
  const [catagory, setCatagory] = useState("");
  const [date, setDate] = useState("");

  const haneleAddBalance = (e) => {
    e.preventDefault();
    const amount = parseInt(addAmount);
    console.log(amount, income);
    if (amount <= 0) {
      enqueueSnackbar("Enter  valid Amount to add to Wallet", {
        variant: "warning",
      });
      onRequestClose();
      return;
    }
    setIncome((prev) => parseInt(prev) + amount);
    const balance = parseInt(localStorage.getItem("balance")) + amount;

    localStorage.setItem("balance", balance);
    setAmount(balance);
    setAddAmount("");
    onRequestClose();
  };

  const addExpense = (e) => {
    debugger;
    e.preventDefault();
    const price = Number(expense);
    console.log(price);
    if (price <= 0) {
      enqueueSnackbar("Add valid price to Add Expense", { variant: "warning" });
      onRequestClose();
      return;
    }
    if (!title || !expense || !date || !catagory) {
      enqueueSnackbar("Please fill the  all fields", { variant: "warning" });
      onRequestClose();
      return;
    }

    if(parseInt(localStorage.getItem('balance'))< price){
      enqueueSnackbar("Please look at Wallet Balance Before Procedding ", { variant: 'info' });
      onRequestClose();
      return;
    }


    const newData = {
      title: title,
      price: price,
      catagory: catagory,
      createdDate: date,
    };

    if(editTrans){
      setExpenseList((prevExpenses) => {
        const updatedExpenses = [...prevExpenses];
        updatedExpenses[indexofItem] = newData; 
        localStorage.setItem("expenseList", JSON.stringify(updatedExpenses));
        return updatedExpenses;
      });
    }
    else{
      setExpenseList((prevExpenses) => {
        const updatedExpenses = [...prevExpenses, newData];
        localStorage.setItem("expenseList", JSON.stringify(updatedExpenses));
        return updatedExpenses;
      });
    }
   

    setIncome((prev) => parseInt(prev) - price);
    const balance = parseInt(localStorage.getItem("balance")) - price;
    localStorage.setItem("balance", balance);
    setAmount(balance);

    const epns = parseInt(localStorage.getItem("expense")) + price;
    localStorage.setItem("expense", epns);

    setExpenseAmount(epns);

    setTitle("");
    setExpense("");
    setDate("");
    setCatagory("");
    onRequestClose();
  };

  useEffect(() => {
    console.log('edite')
    setTitle(editTrans && item ? item.title : "");
    setExpense(editTrans && item ? item.price : "");
    setCatagory(editTrans && item ? item.catagory : "");
    setDate(editTrans && item ? item.createdDate : "");
  }, [item]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={styles.modal}
      overlayClassName={styles.overlay}
      // styles={{  zIndex: 67 }}
    >
      {!addBalance ? (
        <div>
          <div className={styles.heading}>
            {editTrans ? "Edit Expenses" : "Add Expenses"}
          </div>
          <form
            className={styles.details}
            onSubmit={(e) => {
              addExpense(e);
            }}
          >
            <input
              type="text"
              className={styles.inputbox}
              placeholder="title"
              onChange={(e) => {
               
                setTitle(e.target.value);
              }}
              value={title}
            />
            <input
              type="number"
              className={styles.inputbox}
              placeholder="Price"
              onChange={(e) => {
                setExpense(e.target.value);
              }}
              value={expense}
            />
            <select
              className={styles.inputbox}
              onChange={(e) => {
                setCatagory(e.target.value);
              }}
              placeholder="catagory"
              value={catagory}
            >
              <option value="" disabled selected>
                Select Catagory
              </option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Travel">Travel</option>
            </select>
            <input
              type="date"
              className={styles.inputbox}
              placeholder="dd/mm/yy"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              value={date}
            />

            <button className={styles.buttonstyle} type="submit">
              Add Expense
            </button>
            <button
              type="button"
              className={`${styles.buttonstyle} ${styles.close}`}
              onClick={() => onRequestClose()}
            >
              cancle
            </button>
          </form>
        </div>
      ) : (
        <div>
          <div>Add Expenses</div>
          <form
            className={`${styles.details} ${styles.detailsadd}`}
            onSubmit={(e) => {
              haneleAddBalance(e);
            }}
          >
            <input
              type="number"
              className={styles.inputbox}
              placeholder="income Amount"
              onChange={(e) => {
                setAddAmount(e.target.value);
              }}
            />

            <button
              type="submit"
              className={`${styles.buttonstyle} ${styles.add}`}
            >
              Add Balance
            </button>
            <button
              type="button"
              className={`${styles.buttonstyle} ${styles.close} ${styles.closeadd}`}
              onClick={onRequestClose}
            >
              cancle
            </button>
          </form>
        </div>
      )}
    </ReactModal>
  );
};

export default AddExpenseorAddBalance;
