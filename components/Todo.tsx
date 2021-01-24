import { TodoContainer, ArrowContainer, TodoInfo, TodoHeader, TodoContent, TodoDescription, TodoActions } from '../styles/components/todo';
import {FiChevronDown ,FiCheckSquare, FiSquare, FiXSquare, FiChevronUp, FiTrash2, FiEdit2} from 'react-icons/fi';
import { useState } from 'react';

const Todo = () => {

  const [checkTodo, setCheckTodo] = useState(false);
  const [moreDetails, setMoreDetails] = useState(false);

  return (
    <TodoContainer>
      <TodoHeader>
        <TodoInfo>
          {checkTodo ? (
            <FiCheckSquare size={30} className={checkTodo ? 'checked' : ''} onClick={() => setCheckTodo(false)}/>
          ) : (
            <FiSquare size={30} className={checkTodo ? 'checked' : ''} onClick={() => setCheckTodo(true)}/>
          )}
          <p className={checkTodo ? 'checked' : ''}>Banho no rex</p>
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
          <p>Dar banho no rex amanhã de manhã, pois, ele vai passear de tarde.</p>
          <span>Criada em 18/07/2001</span>
         </TodoDescription>

         <TodoActions>
           <div>
            <FiEdit2/>
            <p>Editar</p>
           </div>

           <div>
            <FiTrash2/>
            <p>Excluir</p>
           </div>
         </TodoActions>
        </TodoContent>
      )}

    </TodoContainer>
  )
}

export default Todo;