import { FunctionComponent } from "react";
import "./AddToDo.css";
const AddToDo: FunctionComponent = () => {
  return (
    <input
      className="add-to-do"
      type="text"
      placeholder="Add to do..."
      maxLength={50}
      minLength={2}
      required
      autoFocus
    />
  );
};

export default AddToDo;
