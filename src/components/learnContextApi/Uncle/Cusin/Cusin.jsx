import React, { useContext } from "react";
import { MoneyContext } from "../../GrandpaContext";

const Cusin = () => {
    const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="bordered">
      <h2>Cusin</h2>
      <button onClick={()=>setMoney(money+500)}>give 500tk to grandpa</button>
    </div>
  );
};

export default Cusin;
