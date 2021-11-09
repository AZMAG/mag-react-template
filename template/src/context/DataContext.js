import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const values = {};

  return (
    <DataContext.Provider value={values}>
      <>{props.children}</>
    </DataContext.Provider>
  );
};
