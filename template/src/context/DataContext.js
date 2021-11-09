import { createContext } from "react";

export const DataContext = createContext();

export const ReadOnDataProvider = (props) => {
  const values = {};

  return (
    <DataContext.Provider value={values}>
      <>{props.children}</>
    </DataContext.Provider>
  );
};
