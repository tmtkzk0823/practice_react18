import { useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title:  string;
  completed: boolean;
}

export const AutoBatchOther = () => {

  console.log('AutoBatchOther');
  const [todo, setTodo] = useState<Todo[] | null>(null);
  const [isFinishApi, setIsFinishApi] = useState<boolean>(false);
  const [state3, setState3] = useState<string>('');


  const onClickExecuteButton = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {
      setTodo(data)
      setIsFinishApi(true)
      setState3('update')
    }
    )
  }

  return(
    <div>
      <h1>AutoBatching（その他）</h1>
      <button onClick={onClickExecuteButton}>AutoBatching（その他）</button>
      <p>
        isFinishApi {isFinishApi ? 'Finish API' : 'Not Finish API'}
      </p>
      {todo?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  )
};