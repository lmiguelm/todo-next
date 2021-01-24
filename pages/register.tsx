import React, { FormEvent, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import axios from 'axios';

import Head from 'next/head';
import Link from 'next/link';

import { Container, RegisterContainer, Header, FormContainer } from '../styles/pages/register';

import {FiArrowLeft} from 'react-icons/fi';

import loadingGif from '../public/assets/loading.json';

interface newUser {
  name: string;
  email: string;
  password: string;
}

const initialState = {
  name: '',
  email: '',
  password: ''
}

export default function Register() {

  const [newUser, setNewUser] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [enableButton, setEnableButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if(newUser.name != '' && newUser.email != '' && newUser.password != '' && confirmPassword != '') {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [newUser, confirmPassword]);

  async function handleSaveNewUser(e: FormEvent) {
    e.preventDefault();

    setLoading(true);

    if(newUser.password !== confirmPassword) {
      setLoading(false);
      setErrorMessage('Senhas não são iguais.');
      return;
    }

    try {
      await axios.post('/api/users/new', { ...newUser });
    } catch (e) {
      console.log('errooo');
      setErrorMessage(e.response.data.message);
      setNewUser(initialState);
      setConfirmPassword('');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>

      <Container>
        {loading ? (
          <RegisterContainer>
            <Lottie 
              options={{
                animationData: loadingGif,
                autoplay: true,
                loop: true
              }}
              height={350}
              width={350}
              speed={2}
            />
          </RegisterContainer>
        ) : (
          <RegisterContainer>
            {errorMessage != '' ? (
              <div id="error-container">
                <h2>{errorMessage}</h2>
                <p onClick={() => setErrorMessage('')}>x</p>
              </div>
            ) : (
              <>
                <Header>
                  <Link href="/">
                    <a>
                      <FiArrowLeft size={20} id="back" />
                    </a>
                  </Link>
                  <h1>Preencha o formulário de cadastro</h1>
                </Header>

                <FormContainer onSubmit={handleSaveNewUser}>
                  <input value={newUser.name} onChange={e => setNewUser({...newUser, name: e.target.value})} type="text" placeholder="Nome"/>
                  <input value={newUser.email} onChange={e => setNewUser({...newUser, email: e.target.value})} type="email" placeholder="E-mail"/>
                  <input value={newUser.password} onChange={e => setNewUser({...newUser, password: e.target.value})} type="password" placeholder="Senha"/>
                  <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirme a senha"/>
                  
                  <button disabled={!enableButton} className={!enableButton ? 'disable-button' : ''}>FINALIZAR CADASTRO</button>
                </FormContainer>
              </>
            )}

          </RegisterContainer>
        )}
      </Container>
    </>
  );
}