import React from "react";
import Me from "./Me/Me";

const Father = () => {
  return (
    <div className="bordered">
      <h2>Father</h2>
      <div className="dFlex">
        <Me />
      </div>
    </div>
  );
};

export default Father;
