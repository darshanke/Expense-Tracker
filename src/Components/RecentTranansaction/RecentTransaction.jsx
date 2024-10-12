import React, { useEffect, useState } from "react";
import CancelButton from "./CancelButton/cancelButton";
import EditButton from "./EditButton/EditButton";
import styles from "./RecentTransaction.module.css";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { IoPizzaOutline } from "react-icons/io5";
import { CiGift } from "react-icons/ci";
import { TfiBag } from "react-icons/tfi";
import AddExpenseorAddBalance from "../Modals/AddExpenseorAddBalance";
import Button from "../Buttons/Button";
import "./EditButton/EditButton.css";
import { VscEdit } from "react-icons/vsc";

const RecentTransaction = ({
  expenseList,
  setExpenseList,
  amount,
  setAmount,
  expenseAmount,
  setExpenseAmount,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = expenseList.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(expenseList.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // useEffect(() => {
  //   setExpenseList(()=>{

  //       const savedExpenses = localStorage.getItem("expenseList") || null;
  //       return savedExpenses ? JSON.parse(savedExpenses) : [];

  //   })
  // }, []);

  const handleDelete = (indexToDelete) => {
    let price = expenseList[indexToDelete].price;
    const updatedList = expenseList.filter(
      (_, index) => index !== indexToDelete
    );
    console.log(updatedList);
    setExpenseList(updatedList);
    localStorage.setItem("expenseList", JSON.stringify(updatedList));

    setAmount((prev) => parseInt(prev) + price);
    localStorage.setItem("balance", parseInt(amount) + price);
    setExpenseAmount((prev) => parseInt(prev) - price);
    localStorage.setItem("expense", parseInt(expenseAmount) - price);
  };

  const [modal, setModal] = useState(false);
  const [tranaction, setEditTransaction] = useState(false);

  return (
    <div>
      <div className={styles.name}>Recent Tranasaction</div>
      <div className={styles.container}>
        <table className={styles.table}>
          <tbody className={styles.border}>
            {currentRows.map((item, index) => (
              <tr key={index}>
                <td className={styles.icon}>
                  {item.catagory === "Food" && <IoPizzaOutline />}
                  {item.catagory === "Entertainment" && <CiGift />}
                  {item.catagory === "Travel" && <TfiBag />}
                </td>
                <td className={styles.details}>
                  <div>
                    <div>{item.title}</div>
                    <div className={styles.datedetails}>{item.createdDate}</div>
                  </div>
                  <div className={styles.actions}>
                    <div style={{ marginRight: "2rem", color: "#F4BB4A" }}>
                      {" "}
                      &#8377; {item.price}
                    </div>
                    <div style={{ marginRight: "0.5rem" }}>
                      <CancelButton
                        onDelete={() => handleDelete(indexOfFirstRow + index)}
                      />
                    </div>
                    <div style={{ marginRight: ".5rem" }}>
                      <Button
                        variant="editTrans"
                        editTrans
                        item={item}
                        indexofItem={indexOfFirstRow + index}
                        expenseList={expenseList}
                        setExpenseList={setExpenseList}
                        amount={amount}
                        setAmount={setAmount}
                        expenseAmount={expenseAmount}
                        setExpenseAmount={setExpenseAmount}
                      >
                        {<VscEdit className="cancel icon" />}
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <button
            className={styles.paginationbutton}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <FiArrowLeft />
          </button>
          <button className={styles.pagenumber}>{currentPage}</button>
          <button
            className={styles.paginationbutton}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
