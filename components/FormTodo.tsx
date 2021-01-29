
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { FormContainer } from '../styles/components/form-todo';
import Lottie from 'react-lottie';

import loadingGif from '../public/assets/loading.json';


const FormTodo = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open');

  const [loading, setLoading] = useState(false);
  const [msgError, setMsgError] = useState('');

  async function handleSaveTask(e: FormEvent) {
    e.preventDefault();
    
    setLoading(true);

    try {
      await axios.post('/api/todos/new', { title, description, status });
      setTitle('');
      setStatus('');
      setDescription('');
    } catch(e) {
      setMsgError(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
    {loading ? (
      <Lottie 
        options={{
          animationData: loadingGif,
          autoplay: true,
          loop: true,
        }}
      />
    ) : (
      <FormContainer onSubmit={handleSaveTask}>
        <input required value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Título da tarefa"/>
        <textarea required value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição"></textarea>
        <select required onChange={e => setStatus(e.target.value)}>
          <option value="open">Aberta</option>
          <option value="resolved">Realizada</option>
          <option value="deleted">Deletada</option>
        </select>
        <button>SALVAR TAREFA</button>
      </FormContainer>
    )}
    </>
  )
}
export default FormTodo;