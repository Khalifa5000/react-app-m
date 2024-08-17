import { createContext, useReducer } from "react";
const ThemeContext = createContext();

const initialData = { 
  name: "Mohamed",
  age: 43,
  count: 0,
  theme: "light",

 };

 const reducer = (State, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...State, name: action.newValue };
    default:
      return State;
  }}



export function DataProvider( {children} ) {
  const [firstState, dispatch] = useReducer(reducer, initialData);


  const changeName = (newName ) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName  });
  };


  return (
     <ThemeContext.Provider value={{ ...firstState , changeName}}>
      {children}
     </ThemeContext.Provider>
  );
}

export default ThemeContext;
