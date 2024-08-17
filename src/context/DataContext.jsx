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
    case "CHANGE_AGE":
      return { ...State, age: action.newValue };
    case "CHANGE_COUNT":
      return { ...State, count: action.newValue };
    case "CHANGE_THEME":
      return { ...State, theme: action.newValue };
    default:
      return State;
  }}



export function DataProvider( {children} ) {
  const [firstState, dispatch] = useReducer(reducer, initialData);


  const changeName = (newName) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName  });
  };

  const changeAge = ( newAge ) => {
    dispatch({ type: "CHANGE_AGE", newValue: newAge  });
  };



  return (
     <ThemeContext.Provider value={{ ...firstState , changeName, changeAge }}>
      {children}
     </ThemeContext.Provider>
  );
}

export default ThemeContext;
