import { ACTIONS } from "./App";

export default function EqualsButton({ dispatch, equalSign }) {
  return (
    <button onClick={() => dispatch({ action: ACTIONS.EVALUATE_EQUATION })}>
      {equalSign}
    </button>
  );
}
