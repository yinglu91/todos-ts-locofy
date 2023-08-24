import './ToDoComplete.css';
import { Todo } from './ToDoListDesign';

type Props = {
  todo: Todo;
};

const ToDoComplete = (props: Props) => {
  return (
    <div className='todocomplete'>
      <button className='image-1' />
      <div className='finish-designs'>{props.todo.name}</div>
    </div>
  );
};

export default ToDoComplete;
