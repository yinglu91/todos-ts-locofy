import { FunctionComponent, useState } from 'react';
import Header from './Header';
import ToDoComplete from './ToDoComplete';
import ToDoIncomplete from './ToDoIncomplete';
import AddToDo from './AddToDo';
import './ToDoListDesign.css';

type Todo = {
  name: string;
  completed: boolean;
};
const ToDoListDesign: FunctionComponent = () => {
  const [todoList, setTodoList] = useState<Todo[]>([] as Todo[]);

  const addNewTodo = (name: string) => {
    const newTodo = {
      name,
      completed: false,
    };

    const updatedTodoList = [...todoList, newTodo];
    console.log(updatedTodoList);

    setTodoList(updatedTodoList);
  };

  return (
    <div className='to-do-list-design'>
      <div className='todolistcontainer'>
        <Header />
        <div className='divider' />
        <ToDoComplete />
        <ToDoIncomplete />
        <div className='divider' />
        <AddToDo addTodo={addNewTodo} />
      </div>
    </div>
  );
};

export default ToDoListDesign;
