import styled from 'styled-components';

export const FormContainer = styled.form`

  background-color: ${props => props.theme.backgroundSecondary};

  padding: 30px;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  width: 100%;

  input, button, textarea, select {

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

  textarea {
    background: ${props => props.theme.backgroundPrimary};
    padding: 20px;
    margin-bottom: 10px;
    height: 150px;
    resize: none;
  }

  select {
    background: ${props => props.theme.backgroundPrimary};
    padding-left: 20px;
    padding-right: 20px;
  }

  .disable-button {
    cursor: not-allowed;
    opacity: .7;
  }
`;