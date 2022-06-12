import { ACTIONS } from "./App";

export default function NumberButton({ dispatch, number }) {
  return (
    <button
      onClick={() =>
        dispatch({ action: ACTIONS.CHOOSE_NUMBER, payload: { number } })
      }
    >
      {number}
    </button>
  );
}
