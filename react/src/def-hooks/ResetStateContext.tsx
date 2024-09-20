import React, { createContext, ReactNode, useContext, useState } from "react";

type ResetStateContextType = {
  resetState: string[];
  setResetState: (newState: string[]) => void;
};

const ResetStateContext = createContext<ResetStateContextType | undefined>(undefined);

export const ResetStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [resetState, setResetState] = useState<string[]>(["0", "0", "0", "0"]); // Initial state with 4 empty strings

  return <ResetStateContext.Provider value={{ resetState, setResetState }}>{children}</ResetStateContext.Provider>;
};

// Custom hook to use the ResetStateContext
export const useResetState = (): ResetStateContextType => {
  const context = useContext(ResetStateContext);
  if (!context) {
    throw new Error("useResetState must be used within a ResetStateProvider");
  }
  return context;
};
