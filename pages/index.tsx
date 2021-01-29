import { FormEvent, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import {useRouter} from 'next/router';

import { FiX } from 'react-icons/fi';

import Head from 'next/head'
import Link from 'next/link';

import { Container, LoginContainer, TitleContainer } from '../styles/pages/index';

import loadingGif from '../public/assets/loading.json';
import bannerGif from '../public/assets/banner.json';

import { useAuth } from '../context/auth';

interface loginData {
  email: string;
  password: string;
}

const initialState = {
  email: '', 
  password: ''
}

export default function Home() {

  const [loginData, setLoginData] = useState<loginData>(initialState);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { login, signed } = useAuth();

  const router = useRouter();

  useEffect(() => {
    console.log(signed);
    if(signed) router.push('/dashboard');
  }, []);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    
    try {
      await login(loginData.email, loginData.password);
      router.push('/dashboard');
    } catch (e) {
      setLoginData(initialState);
      setErrorMessage(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
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
                  <FiX className="fix" onClick={() => setErrorMessage('')}/>
                </div>
              ) : (
                <>
                  <form onSubmit={handleLogin}>
                    <input onChange={e => setLoginData({...loginData, email: e.target.value})} value={loginData.email} placeholder="E-mail" type="email" required/>
                    <input onChange={e => setLoginData({...loginData, password: e.target.value})} value={loginData.password} placeholder="Senha" type="password" required/>
                    <button>ENTRAR</button>
                  </form>
                  <span>não tem conta ? <Link href="/register"><a>Registre-se</a></Link></span>
                </>
              )}
            </>
          )}
        </LoginContainer>
      </Container>
    </>

  )
}
