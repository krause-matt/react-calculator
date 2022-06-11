import { useReducer } from "react";
import "./app.css";

const ACTIONS = {
  CHOOSE_NUMBER: "choose-number",
  CLEAR_SCREEN: "clear-screen",
  DELETE_NUMBER: "delete-number",
  MATH_OPERATION: "math-operation",
  EVALUATE_EQUATION: "evaluate-equation",
};

function reducer(state, action) {}

function App() {
  const [{ previousEntry, currentEntry, mathFunction }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="calculator-frame">
      <div className="output-window">
        <div className="previous-entry"></div>
        <div className="current-entry"></div>
      </div>
      <button className="two-col">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="two-col">=</button>
    </div>
  );
}

export default App;
