import { useReducer } from "react";
import "./app.css";
import NumberButton from "./NumberButton.js";
import FunctionButton from "./FunctionButton.js";

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
        return state;
      } else if (payload.number === "." && state.currentEntry.includes(".")) {
        return { ...state, currentEntry: state.currentEntry };
      } else {
        return {
          ...state,
          currentEntry: `${state.currentEntry || ""}${payload.number}`,
        };
      }

    case ACTIONS.MATH_OPERATION:
      if (!state.currentEntry && !state.previousEntry) {
        return {};
      }
      if (state.currentEntry && !state.previousEntry) {
        return {
          currentEntry: "",
          previousEntry: state.currentEntry,
          mathFunction: payload.math,
        };
      }
      if (state.currentEntry && state.mathFunction) {
        if (state.mathFunction === "/") {
          return {
            currentEntry: "",
            previousEntry: state.previousEntry / state.currentEntry,
            mathFunction: payload.math,
          };
        }
        if (state.mathFunction === "*") {
          return {
            currentEntry: "",
            previousEntry: state.previousEntry * state.currentEntry,
            mathFunction: payload.math,
          };
        }
        if (state.mathFunction === "+") {
          return {
            currentEntry: "",
            previousEntry: +state.previousEntry + +state.currentEntry,
            mathFunction: payload.math,
          };
        }
        if (state.mathFunction === "-") {
          return {
            currentEntry: "",
            previousEntry: +state.previousEntry - +state.currentEntry,
            mathFunction: payload.math,
          };
        }
      }
      if (!state.currentEntry && state.mathFunction) {
        return { ...state, mathFunction: payload.math };
      }
      break;

    case ACTIONS.EVALUATE_EQUATION:
      if (!state.currentEntry || !state.previousEntry || !state.mathFunction) {
        return state;
      } else {
        if (state.mathFunction === "/") {
          return {
            currentEntry: state.previousEntry / state.currentEntry,
            previousEntry: "",
            mathFunction: "",
            calcResult: true,
          };
        }
        if (state.mathFunction === "*") {
          return {
            currentEntry: state.previousEntry * state.currentEntry,
            previousEntry: "",
            mathFunction: "",
            calcResult: true,
          };
        }
        if (state.mathFunction === "+") {
          return {
            currentEntry: +state.previousEntry + +state.currentEntry,
            previousEntry: "",
            mathFunction: "",
            calcResult: true,
          };
        }
        if (state.mathFunction === "-") {
          return {
            currentEntry: +state.previousEntry - +state.currentEntry,
            previousEntry: "",
            mathFunction: "",
            calcResult: true,
          };
        }
      }
      break;

    case ACTIONS.CLEAR_SCREEN:
      return {};

    case ACTIONS.DELETE_NUMBER:
      if (!state.currentEntry) {
        if (!state.mathFunction) {
          return state;
        } else {
          return {
            currentEntry: state.previousEntry,
            previousEntry: "",
            mathFunction: "",
          };
        }
      } else {
        if (state.calcResult) {
          return {
            ...state,
            currentEntry: "",
            calcResult: false,
          };
        } else {
          const currentEntryString = state.currentEntry.toString();
          return {
            ...state,
            currentEntry: currentEntryString.slice(
              0,
              currentEntryString.length - 1
            ),
          };
        }
      }

    default:
      console.log("Error");
  }
}

const addCommas = (numCheck) => {
  if (typeof numCheck === "number") {
    numCheck = numCheck.toString();
  }
  if (numCheck) {
    if (numCheck.includes(".")) {
      const [integer, decimal] = numCheck.split(".");
      const intToString = parseInt(integer);
      const decimalToString = parseInt(decimal);
      const formattedInt = Intl.NumberFormat("en-US").format(intToString);
      const formattedDecimal =
        Intl.NumberFormat("en-US").format(decimalToString);
      return `${formattedInt}.${formattedDecimal}`;
    } else {
      const intToString = parseInt(numCheck);
      const formattedInt = Intl.NumberFormat("en-US").format(intToString);
      return formattedInt;
    }
  }
};

function App() {
  const [{ currentEntry, previousEntry, mathFunction }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-frame">
      <div className="output-window">
        <div className="previous-entry">
          {addCommas(previousEntry)} {mathFunction}
        </div>
        <div className="current-entry">{addCommas(currentEntry)}</div>
      </div>
      <button
        className="two-col"
        onClick={() => {
          dispatch({ action: ACTIONS.CLEAR_SCREEN });
        }}
      >
        AC
      </button>
      <button
        onClick={() => {
          dispatch({ action: ACTIONS.DELETE_NUMBER });
        }}
      >
        DEL
      </button>
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
      <FunctionButton dispatch={dispatch} math="-" />
      <NumberButton dispatch={dispatch} number="0" />
      <NumberButton dispatch={dispatch} number="." />
      <button
        className="two-col"
        onClick={() => {
          dispatch({ action: ACTIONS.EVALUATE_EQUATION });
        }}
      >
        =
      </button>
    </div>
  );
}

export default App;
