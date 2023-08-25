import { FunctionComponent, useState } from 'react';
import Header from './Header';
import ToDoComplete from './ToDoComplete';
import ToDoIncomplete from './ToDoIncomplete';
import AddToDo from './AddToDo';
import './ToDoListDesign.css';
import React from 'react';

export type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

const initTodos: Todo[] = [
  { id: 1, name: 'Finish designs', completed: true },
  { id: 2, name: 'Make responsive on Figma', completed: false },
];

const ToDoListDesign: FunctionComponent = () => {
  // const [todoList, setTodoList] = useState<Todo[]>([] as Todo[]);
  const [todoList, setTodoList] = useState(initTodos);

  const addNewTodo = (name: string) => {
    const newTodo = {
      id: todoList.length + 1,
      name,
      completed: false,
    };

    const updatedTodoList = [...todoList, newTodo];
    // console.log(updatedTodoList);

    setTodoList(updatedTodoList);
  };

  const toggleTodo = (id: number) => {
    const todo = todoList.find((todo) => todo.id === id);
    if (!todo) {
      return;
    }

    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodoList(updatedTodoList);
  };

  return (
    <div className='to-do-list-design'>
      <div className='todolistcontainer'>
        <Header />
        <div className='divider' />

        {todoList.map((todo) => (
          <React.Fragment key={todo.id}>
            {todo.completed ? (
              <ToDoComplete
                todo={todo}
                toggleTodo={toggleTodo}
              />
            ) : (
              <ToDoIncomplete
                todo={todo}
                toggleTodo={toggleTodo}
              />
            )}
          </React.Fragment>
        ))}
        {/* <ToDoComplete name='Finish designs' />
        <ToDoIncomplete name='Make responsive on Figma' /> */}
        <div className='divider' />
        <AddToDo addTodo={addNewTodo} />
      </div>
    </div>
  );
};

export default ToDoListDesign;
