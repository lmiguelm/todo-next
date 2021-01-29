import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  padding: 20px;

  overflow: auto;

  @media(max-width: 768px) {
    margin-top: 100px;
    overflow: hidden;
    height: 100%;
  }
`;

export const MenuHide = styled.div`
  background-color: ${props => props.theme.backgroundSecondary};
  width: 100%;
  height: 90px;

  display: flex;
  justify-content:space-between;
  align-items:center;

  position: fixed;

  padding: 30px;

  div {
    height: 30px;
    width: 30px;
    background-color: ${props => props.theme.colorPrimary};
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: ease .2s;

    &:hover {
      opacity: .7;
    }
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;

  button {

    width: 100%;
    max-width: 250px;

    height: 50px;
    border: none;
    border-radius: 8px;
    color: ${props => props.theme.colorSecondary};
    font-size: 16px;
    background: ${props => props.theme.colorPrimary};
    font-weight: bold;
    margin-top: 30px;
    cursor: pointer;
    transition: ease .2s;

    &:hover {
      opacity: .7;
    }

    &:focus {
      outline: none;
      border: 2px solid ${props => props.theme.colorPrimary}
    }
  }
`;