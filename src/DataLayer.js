import React, { createContext, useContext, useReducer } from "react";

//Preparing the datalayer
export const DataLayerContext = createContext();

//wrap the app and provide the datalayer
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {" "}
    {/**passing the value to the datalayer */}
    {children}
  </DataLayerContext.Provider>
);
//Pull the information from the DataLayer
export const useDataLayerValue = () => useContext(DataLayerContext);
