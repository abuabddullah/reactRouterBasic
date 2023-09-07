import React, { createContext } from "react";

export const BestPracContext = createContext(null);

const BestContext = ({ children }) => {
  const bestPracContextMessage = `This is the best practice of Context API from src/components/learnContextApi/contextProviders/BestContext.jsx`;
  return (
    <BestPracContext.Provider value={bestPracContextMessage}>
      {children}
    </BestPracContext.Provider>
  );
};

export default BestContext;
