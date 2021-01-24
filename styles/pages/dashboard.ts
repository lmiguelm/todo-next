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
  justify-content: center;

  width: 100%;

  padding: 20px;
`;

export const MenuHide = styled.div`
  background-color: ${props => props.theme.backgroundSecondary};
  width: 100%;
  height: 90px;

  display: flex;
  justify-content:space-between;
  align-items:center;

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