import React, { createContext, useState } from "react";
import "./GrandpaContext.css";
import Father from "./Father/Father";
import Uncle from "./Uncle/Uncle";

export const MoneyContext = createContext(0);

const GrandpaContext = () => {
  const [money, setMoney] = useState(1000);
  return (
    <div>
      <small>this is ContextAPI practice with</small>
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
