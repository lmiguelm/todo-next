import { FormEvent, useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';

import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';

import { Container, LoginContainer, TitleContainer } from '../styles/pages/index';

import loadingGif from '../public/assets/loading.json';
import bannerGif from '../public/assets/banner.json';

interface Login {
  email: string;
  password: string;
}

const initialState = {
  email: '', 
  password: ''
}

export default function Home() {

  const [login, setLogin] = useState<Login>(initialState);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    try {
      await axios.post('/api/users/login', { ...login });
    } catch (e) {
      setLogin(initialState);
      setErrorMessage(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>Entrar</title>
      </Head>

      <Container>

        <TitleContainer>
          <Lottie
            options={{
              animationData: bannerGif,
              autoplay: true,
              loop: true
            }}
            height={250}
            width={250}
          />
          <h1>Go Task</h1>
          <p>Crie, edite e organize suas tarefas.</p>
        </TitleContainer>

        <LoginContainer>
          {loading ? (
            <Lottie 
              options={{
                animationData: loadingGif,
                autoplay: true,
                loop: true
              }}
              speed={2}
            />
          ) : (
            <>
              {errorMessage != '' ? (
                <div id="error-container">
                  <h2>{errorMessage}</h2>
                  <p onClick={() => setErrorMessage('')}>x</p>
                </div>
              ) : (
                <>
                  <form onSubmit={handleLogin}>
                    <input onChange={e => setLogin({...login, email: e.target.value})} value={login.email} placeholder="E-mail" type="email" required/>
                    <input onChange={e => setLogin({...login, password: e.target.value})} value={login.password} placeholder="Senha" type="password" required/>
                    <button>ENTRAR</button>
                  </form>
                  <span>não tem conta ? <Link href="/register"><a>Registre-se</a></Link></span>
                </>
              )}
            </>
          )}
        </LoginContainer>
      </Container>
    </div>

  )
}
