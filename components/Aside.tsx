import { Container, Header } from '../styles/components/aside';

import { FiLogOut, FiPlus, FiCheck, FiEye, FiX, FiTrash2 } from 'react-icons/fi';
import { IoMoonOutline } from 'react-icons/io5';

import {useRouter} from 'next/router';

import { useAuth } from '../context/auth';
import { useEffect } from 'react';

interface AsideProps {
  callback(show: boolean): void;
  activeLink(activeLink: string): void;
}


const Aside: React.FC<AsideProps> = ({ callback, activeLink }) => {

  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    const element = document.getElementById('all');
    element.classList.add('other-active');
  }, []);

  function handleLogout() {
    logout();
    router.push('/');
  }

  function handleActiveLink(item: string) {

    const elements = document.querySelectorAll('li'); 
    elements.forEach(el => {
      el.classList.remove('new-active');
      el.classList.remove('deleted-active');
      el.classList.remove('other-active');
    })
    
    const element = document.getElementById(item);
    if(item == 'new') {
      element.classList.add('new-active');
    } else if(item == 'deleted') {
      element.classList.add('deleted-active');
    } else {
      element.classList.add('other-active');
    }

    activeLink(item);
  }

  return (
    <Container>
      <Header>
        <h1>PAINEL DE CONTROLE</h1>
        <div onClick={() => callback(true)}>
          <FiX/>
        </div>
      </Header>

      <ul>
        <li className="new" id="new" onClick={() => handleActiveLink('new')}>
          <FiPlus size={20}/>
          <span>Nova tarefa</span>
        </li>
        <li id="open" onClick={() => handleActiveLink('open')}>
          <IoMoonOutline size={20}/>
          <span>Tarefas abertas</span>
        </li>
        <li id="resolved" onClick={() => handleActiveLink('resolved')}>
          <FiCheck size={20}/>
          <span>Tarefas concluidas</span>
        </li>
        <li id="deleted" className="deleted" onClick={() => handleActiveLink('deleted')}>
          <FiTrash2 size={20}/>
          <span>Tarefas removidas</span>
        </li>
        <li id="all" onClick={() => handleActiveLink('all')}>
          <FiEye size={20} />
          <span>Todas as tarefas</span>
        </li>
      </ul>

      <div onClick={handleLogout} className="footer">
        <FiLogOut size={20}/>
        <p>SAIR</p>
      </div>
    </Container>
  )
}

export default Aside;