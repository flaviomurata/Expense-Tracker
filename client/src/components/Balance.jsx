import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const textColor = total < 0 ? "money minus" : "money plus";

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 className={textColor}>${total}</h1>
    </div>
  );
};
