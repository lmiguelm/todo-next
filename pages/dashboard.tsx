import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { FiAlignJustify } from 'react-icons/fi';

import Head from 'next/head';
import Link from 'next/link';

import Aside from '../components/Aside';

import { Container, Content,MenuHide,NotFoundContainer } from '../styles/pages/dashboard';

import { useAuth } from '../context/auth';
import Todo from '../components/Todo';
import axios from 'axios';
import FormTodo from '../components/FormTodo';



interface ITodo {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  status: string;
}

const initialState = {
  _id: '',
  title: '',
  description: '',
  createdAt: '',
  status: '',
}

export default function Dashboard() {

  const router = useRouter();
  
  const { signed } = useAuth();

  const [showMenu, setShowMenu] = useState(false);
  const [showFormTodo, setShowFormTodo] = useState(false);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [linkActive, setLinkActive] = useState('');

  const hideMenuMobile = useCallback(res => {
    setShowMenu(!res);
  }, []);

  const activeLink = useCallback(res => {
    if(res == 'new') {
      setShowFormTodo(true);
    } else {
      setShowFormTodo(false);
      findTodo(res);
    }
    setLinkActive(res);
  }, []);

  const todoCallback = useCallback((todo: ITodo) => {
    if(linkActive != 'all') {
      setTodos(
        todos.filter(task => {
          if(task._id != todo._id) {
            return task;
          }
        })
      );
    } 
  }, [todos]);


  useEffect(() => {
    function showMenu() {
      if(window.innerWidth > 768) {
        setShowMenu(true);
      }
    }
    showMenu();

    addEventListener('resize', showMenu);

    if(signed) {
      findTodo('all');
    }

  }, []);  

  async function findTodo(link: string) {
    const res = await axios.get(`/api/todos/find/${link}`);
    setTodos(res.data);
  }


  if(!signed) {
    return (
      <>
        <h1>Você não está autenticado.</h1>  
        <p>clique <Link href="/"><a>aqui</a></Link> para fazer o login</p>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Dashboard</title>
        </Head>

        <Container>
          { showMenu ? (
            <Aside callback={hideMenuMobile} activeLink={activeLink} />
          ) : (
            <MenuHide>
              <h1>Go Task</h1>
              <div onClick={() => setShowMenu(true)}>
                <FiAlignJustify/>
              </div>
            </MenuHide>
          )}

          {showFormTodo ? (
            <Content>
              <FormTodo/>
            </Content>
          ) : (
            <Content>
              {todos.length == 0 ? (
                <NotFoundContainer>
                  <h1>Nenhuma tarefa encontrada.</h1>
                  <button onClick={() => setShowFormTodo(true)}>Cadastre uma nova tarefa</button>
                </NotFoundContainer>
              ) : (
                <>
                  {todos.map(todo => (
                    <Todo key={todo._id} todo={todo} callback={todoCallback}/>
                  ))}
                </>
              )}
            </Content>
          )}
        </Container>  
      </>
    )
  }
}
