import './ToDoIncomplete.css';
import { Todo } from './ToDoListDesign';

type Props = {
  todo: Todo;
};

const ToDoIncomplete = ({ todo }: Props) => {
  return (
    <div className='todoincomplete'>
      <button className='image-2' />
      <div className='make-responsive-on'>{todo.name}</div>
    </div>
  );
};

export default ToDoIncomplete;
