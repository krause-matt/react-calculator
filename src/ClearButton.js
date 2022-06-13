import { ACTIONS } from "./App";

export default function ClearButton({ dispatch, clearText }) {
  return (
    <button onClick={() => dispatch({ action: ACTIONS.CLEAR_SCREEN })}>
      {clearText}
    </button>
  );
}
