import { createContext, useReducer } from "react";
const ThemeContext = createContext();

const initialData = { 
  name: "Mohamed",
  age: 43,
  count: 0,
  theme: "light",

 };

const reducer = () => {}

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  return (
     <ThemeContext.Provider value={{ ...firstState}}>
      {children}
     </ThemeContext.Provider>
  );
}

export default ThemeContext;