import { ACTIONS } from "./App";

export default function DeleteButton({ dispatch, deleteText }) {
  return (
    <button
      onClick={() =>
        dispatch({ action: ACTIONS.DELETE_NUMBER, payload: { deleteText } })
      }
    >
      {deleteText}
    </button>
  );
}
