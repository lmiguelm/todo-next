import { TodoContainer, ArrowContainer, TodoInfo, TodoHeader, TodoContent, TodoDescription, TodoActions } from '../styles/components/todo';
import {FiChevronDown ,FiCheckSquare, FiSquare, FiXSquare, FiChevronUp, FiTrash2, FiEdit2} from 'react-icons/fi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';


interface ITodo {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  status: string;
}

interface TodoProps {
  todo: ITodo;
  callback(todo: ITodo): void;
}

const Todo: React.FC<TodoProps> = ({ todo, callback }) => {

  const [checkTodo, setCheckTodo] = useState(false);
  const [checkTodoDeleted, setCheckTodoDeleted] = useState(false);
  const [moreDetails, setMoreDetails] = useState(false);

  useEffect(() => {
    if(todo.status == 'open') {
      setCheckTodo(false);
    } else {
      if(todo.status == 'deleted') {
        setCheckTodoDeleted(true);
      }
      setCheckTodo(true);
    }
  }, []);

  async function handleDeleteTask(id: string) {
    try {
      await axios.post(`/api/todos/delete/${id}`);
      callback({...todo, status: 'deleted'});
    } catch (e) {
      console.log(e);
    }
  }

  async function changeTodo(todo: ITodo, status: string) {
    try {
      await axios.put(`/api/todos/update/${todo._id}`, { ...todo, status });

      if(status == 'open') {
        setCheckTodo(false);
      } else {
        setCheckTodo(true);
      }

      callback({ ...todo, status });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <TodoContainer>
      <TodoHeader>
        <TodoInfo>
          {checkTodo ? (
            <>
              {checkTodoDeleted ? (
                <FiXSquare size={30} className={todo.status ? 'deleted' : ''} />
              ) : (
                <FiCheckSquare size={30} className={todo.status ? 'checked' : ''} onClick={() => changeTodo(todo, 'open')}/>
              )}

            </>
          ) : (
            <FiSquare size={30} className={checkTodo ? 'checked' : ''} onClick={() => changeTodo(todo, 'resolved')}/>
          )}
          <p className={checkTodo ? checkTodoDeleted ? 'deleted' : 'checked' : ''}>{todo.title}</p>
        </TodoInfo>

        <ArrowContainer>
          {moreDetails ? (
            <FiChevronUp size={30} onClick={() => setMoreDetails(false)} />
          ) : (
            <FiChevronDown size={30} onClick={() => setMoreDetails(true)} />
          )}
        </ArrowContainer>
      </TodoHeader>

      {moreDetails && (
        <TodoContent>
         <TodoDescription>
          <p>{todo.description}</p>
          <span>Criada em {moment(todo.createdAt).format('DD/MM/YYYY')} às {moment(todo.createdAt).format('HH:mm')}</span>
         </TodoDescription>

         <TodoActions>
           <div>
            <FiEdit2/>
            <p>Editar</p>
           </div>

           { todo.status != 'deleted' && (
            <div onClick={() => handleDeleteTask(todo._id)}>
              <FiTrash2/>
              <p>Excluir</p>
            </div>
           )}
         </TodoActions>
        </TodoContent>
      )}

    </TodoContainer>
  )
}

export default Todo;