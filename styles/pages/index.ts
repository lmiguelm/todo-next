import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`

  margin-right: 100px;
  min-width: 350px;
  max-width: 450px;
  width: 40%;

  /* background-color: red; */

  min-height: 400px;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 70px;
    color: ${props => props.theme.colorSecondary};
    text-align: center;
  }

  p {
    color: ${props => props.theme.colorSecondary};
    text-align: center;
  }

  @media(max-width: 1000px) { 
    display: none;
  }
`;

export const LoginContainer = styled.div`
  min-width: 350px;
  max-width: 450px;
  width: 40%;

  min-height: 400px;
  height: 50%;

  background-color: ${props => props.theme.backgroundSecondary};

  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 80px;

  form {
    display: flex;
    flex-direction: column;

    width: 100%;

    input, button {
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
  }

  span {
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
    color: ${props => props.theme.colorSecondary};

    a {
      text-decoration: none;
      color: ${props => props.theme.colorPrimary};
      transition: ease .2s;

      &:hover {
        opacity: .7;
      }
    }
  }

  #error-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    h2 {
      color: ${props => props.theme.colorSecondary};
    }

    .fix {
      color: red;
      cursor: pointer;
      transition: ease .2s;

      &:hover {
        opacity: .7;
      }
    }
  }
`;