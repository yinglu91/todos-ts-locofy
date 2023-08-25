import './ToDoComplete.css';
import { Todo } from './ToDoListDesign';

type Props = {
  todo: Todo;
  toggleTodo: (id: number) => void;
};

const ToDoComplete = (props: Props) => {
  const handleOnClick = () => {
    props.toggleTodo(props.todo.id);
  };

  return (
    <div className='todocomplete'>
      <button
        className='image-1'
        onClick={handleOnClick}
      />
      <div className='finish-designs'>{props.todo.name}</div>
    </div>
  );
};

export default ToDoComplete;
