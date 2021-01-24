import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { FiAlignJustify } from 'react-icons/fi';

import Head from 'next/head';

import Aside from '../components/Aside';

import { Container, Content,MenuHide } from '../styles/pages/dashboard';

import { useAuth } from '../context/auth';
import Todo from '../components/Todo';

export default function Dashboard() {

  const router = useRouter();
  const { signed } = useAuth();

  const [showMenu, setShowMenu] = useState(false);

  const hideMenuMobile = useCallback(res => {
    setShowMenu(!res);
  }, []);

  useEffect(() => {
    if(!signed) router.push('/');
    
    function showMenu() {
      if(window.innerWidth > 768) {
        setShowMenu(true);
      }
    }
    showMenu();

    addEventListener('resize', showMenu);

  }, []);  

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Container>
        { showMenu ? (
          <Aside callback={hideMenuMobile} />
        ) : (
          <MenuHide>
            <h1>Go Task</h1>
            <div onClick={() => setShowMenu(true)}>
              <FiAlignJustify/>
            </div>
          </MenuHide>
        )}

        <Content>
          <Todo/>
          <Todo/>
        </Content>
      </Container>  
    </>
  )
}
