import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterContainer = styled.div`
  min-width: 350px;
  max-width: 1000px;
  width: 60%;

  min-height: 400px;
  /* height: 100%; */

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.backgroundSecondary};

  border-radius: 8px;

  padding: 20px;

  #error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    h2 {
      color: ${props => props.theme.colorSecondary};
      text-decoration: underline;
      margin-right: 30px;
    }

    p {
      color: red;
      cursor: pointer;
      transition: ease .2s;

      &:hover {
        opacity: .7;
      }
    }
  }
`;

export const Header = styled.div`
  /* position: fixed; */

  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: red; */

  #back {
    background-color: ${props => props.theme.colorPrimary};
    color: ${props => props.theme.colorSecondary};
    border-radius: 8px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition: ease .2s;

    &:hover {
      opacity: .7;
    }
  }

  h1 {
    flex: 1;
    text-align: center;

    @media(max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  width: 100%;

  input, button {

    width: 50%;
    min-width: 300px;

    height: 50px;
    border: none;
    border-radius: 8px;
    color: ${props => props.theme.colorSecondary};
    font-size: 16px;

    &:focus {
      outline: none;
      border: 2px solid ${props => props.theme.colorPrimary}
    }
  }

  input {
    background: ${props => props.theme.backgroundPrimary};
    padding: 20px;
    margin-bottom: 10px;
  }

  button {
    background: ${props => props.theme.colorPrimary};
    font-weight: bold;
    margin-top: 30px;
    cursor: pointer;
    transition: ease .2s;

    &:hover {
      opacity: .7;
    }
  }

  .disable-button {
    cursor: not-allowed;
    opacity: .7;
  }
  
`;