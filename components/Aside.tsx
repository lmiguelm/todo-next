import { Container, Header } from '../styles/components/aside';

import { FiLogOut, FiPlus, FiCheck, FiEye, FiX } from 'react-icons/fi';
import { IoMdHammer } from 'react-icons/io';
import { IoMoonOutline } from 'react-icons/io5';

import {useRouter} from 'next/router';

import { useAuth } from '../context/auth';

interface AsideProps {
  callback(show: boolean): void;
}


const Aside: React.FC<AsideProps> = ({ callback }) => {

  const router = useRouter();
  const { logout } = useAuth();

  function handleLogout() {
    logout();
    router.push('/');
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
        <li className="new">
          <FiPlus size={20}/>
          <span>Nova tarefa</span>
        </li>
        <li>
          <IoMoonOutline size={20}/>
          <span>Tarefas abertas</span>
        </li>
        <li>
          <IoMdHammer size={20}/>
          <span>Tarefas em progresso</span>
        </li>
        <li>
          <FiCheck size={20}/>
          <span>Tarefas concluidas</span>
        </li>
        <li>
          <FiEye size={20}/>
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