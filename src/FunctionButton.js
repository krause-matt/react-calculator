import { ACTIONS } from "./App";

export default function FunctionButton({ dispatch, math }) {
  return (
    <button
      onClick={() =>
        dispatch({ action: ACTIONS.MATH_OPERATION, payload: { math } })
      }
    >
      {math}
    </button>
  );
}
