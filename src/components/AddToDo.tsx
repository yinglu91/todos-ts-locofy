import { FunctionComponent, useState } from 'react';
import './AddToDo.css';

type Props = {
  addTodo: (name: string) => void;
};

const AddToDo: FunctionComponent<Props> = (props) => {
  const [todo, setTodo] = useState('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && todo.trim().length > 0) {
      props.addTodo(todo);
      setTodo('');
    }
  };

  return (
    <input
      className='add-to-do'
      type='text'
      placeholder='Add to do...'
      maxLength={50}
      minLength={2}
      required
      autoFocus
      value={todo}
      onChange={handleOnChange}
      onKeyUp={handleKeyUp}
    />
  );
};

export default AddToDo;
