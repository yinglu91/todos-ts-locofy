import './ToDoIncomplete.css';
import { Todo } from './ToDoListDesign';

type Props = {
  todo: Todo;
  toggleTodo: (id: number) => void;
};

const ToDoIncomplete = ({ todo, toggleTodo }: Props) => {
  const handleOnClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div className='todoincomplete'>
      <button
        className='image-2'
        onClick={handleOnClick}
      />
      <div className='make-responsive-on'>{todo.name}</div>
    </div>
  );
};

export default ToDoIncomplete;
