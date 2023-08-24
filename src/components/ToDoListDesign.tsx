import { FunctionComponent } from "react";
import Header from "./Header";
import ToDoComplete from "./ToDoComplete";
import ToDoIncomplete from "./ToDoIncomplete";
import AddToDo from "./AddToDo";
import "./ToDoListDesign.css";
const ToDoListDesign: FunctionComponent = () => {
  return (
    <div className="to-do-list-design">
      <div className="todolistcontainer">
        <Header />
        <div className="divider" />
        <ToDoComplete />
        <ToDoIncomplete />
        <div className="divider" />
        <AddToDo />
      </div>
    </div>
  );
};

export default ToDoListDesign;
