import { useReducer } from "react";
import "./app.css";
import NumberButton from "./NumberButton.js";
import FunctionButton from "./FunctionButton.js";
import ClearButton from "./ClearButton";
import DeleteButton from "./DeleteButton";

export const ACTIONS = {
  CHOOSE_NUMBER: "choose-number",
  CLEAR_SCREEN: "clear-screen",
  DELETE_NUMBER: "delete-number",
  EVALUATE_EQUATION: "evaluate-equation",
  MATH_OPERATION: "math-operation",
};

function reducer(state, { action, payload }) {
  switch (action) {
    case ACTIONS.CHOOSE_NUMBER:
      if (
        !state.currentEntry &&
        (payload.number === "0" || payload.number === ".")
      ) {
        return { state };
      } else if (payload.number === "." && state.currentEntry.includes(".")) {
        return { ...state, currentEntry: state.currentEntry };
      } else {
        return {
          ...state,
          currentEntry: `${state.currentEntry || ""}${payload.number}`,
        };
      }
    case ACTIONS.MATH_OPERATION:
      if (!state.currentEntry) {
        return { state };
      } else {
        return {
          previousEntry: state.currentEntry,
          currentEntry: "",
          mathFunction: payload.math,
        };
      }
    case ACTIONS.CLEAR_SCREEN:
      return {};
    case ACTIONS.DELETE_NUMBER:
      if (!state.currentEntry) {
        return { state };
      } else {
        return {
          ...state,
          currentEntry: state.currentEntry.slice(
            0,
            state.currentEntry.length - 1
          ),
        };
      }

    default:
      console.log("default");
  }
}

function App() {
  const [{ currentEntry, previousEntry, mathFunction }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-frame">
      <div className="output-window">
        <div className="previous-entry">
          {previousEntry} {mathFunction}
        </div>
        <div className="current-entry">{currentEntry}</div>
      </div>
      <ClearButton className="two-col" dispatch={dispatch} clearText="AC" />
      <DeleteButton dispatch={dispatch} deleteText="DEL" />
      <FunctionButton dispatch={dispatch} math="/" />
      <NumberButton dispatch={dispatch} number="1" />
      <NumberButton dispatch={dispatch} number="2" />
      <NumberButton dispatch={dispatch} number="3" />
      <FunctionButton dispatch={dispatch} math="*" />
      <NumberButton dispatch={dispatch} number="4" />
      <NumberButton dispatch={dispatch} number="5" />
      <NumberButton dispatch={dispatch} number="6" />
      <FunctionButton dispatch={dispatch} math="+" />
      <NumberButton dispatch={dispatch} number="7" />
      <NumberButton dispatch={dispatch} number="8" />
      <NumberButton dispatch={dispatch} number="9" />
      <FunctionButton dispatch={dispatch} math="*" />
      <NumberButton dispatch={dispatch} number="0" />
      <NumberButton dispatch={dispatch} number="." />
      <button className="two-col">=</button>
    </div>
  );
}

export default App;
