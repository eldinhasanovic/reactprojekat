import React, { createContext, useState } from "react";
import productsJSON from "../common/product.json";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState(productsJSON);
  const values = { products, setProducts };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };
