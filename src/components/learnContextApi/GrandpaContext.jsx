import React, { createContext, useContext, useState } from "react";
import "./GrandpaContext.css";
import Father from "./Father/Father";
import Uncle from "./Uncle/Uncle";
import { BestPracContext } from "./contextProviders/BestContext";

export const MoneyContext = createContext(0);

const GrandpaContext = () => {
  const [money, setMoney] = useState(1000);
  const bestPracContextMessage = useContext(BestPracContext);
  return (
    <div>
      <small>this is ContextAPI practice with</small>
      <br />
      <br />
      <strong className="bg-gold">
        {bestPracContextMessage} যা আমরা useContext hook এর সাহায্যে{" "}
        <i>src\components\learnContextApi\GrandpaContext.jsx</i> এ পাচ্ছি
      </strong>
      <br />
      <br />
      <div className="bordered">
        <h2>Grandpa</h2>
        <div className="dFlex">
          <h3>has Money: {money}</h3>
        </div>
        <MoneyContext.Provider value={[money, setMoney]}>
          <sectionc className="dFlex">
            <Father />
            <Uncle />
          </sectionc>
        </MoneyContext.Provider>
      </div>
    </div>
  );
};

export default GrandpaContext;
