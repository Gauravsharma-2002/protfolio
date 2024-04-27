import { useReducer } from "react";

function reducerFunction(state, action) {
  switch (action.type) {
    case "open":
      return state;
    case "close":
      return state;
    default:
      return state;
  }
}

function navReducer() {
  const [state, dispatch] = useReducer(reducerFunction, initialVal);
  
}

export default navReducer;
