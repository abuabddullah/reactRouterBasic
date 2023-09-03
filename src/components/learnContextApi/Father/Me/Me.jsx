import React, { useContext } from "react";
import { MoneyContext } from "../../GrandpaContext";

const Me = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div className="bordered">
      <h2>Me</h2>
      <div className="dFlex">
        <h3>recieved grandpa Money: {money}</h3>
      </div>
    </div>
  );
};

export default Me;
