import styled from 'styled-components';

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${props => props.theme.colorPrimary};
  border-radius: 8px;
  
  width: 100%;
  padding: 30px;

  margin-bottom: 10px;
`;

export const TodoInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  svg {
    margin-right: 20px;
    cursor: pointer;

    transition: ease .2s;

    &:hover {
      opacity: .7;
    }
  }

  p {
    font-size: 20px;
  }

  span {
    margin-left: 50px;
    font-size: 12px;
  }

  .checked {
    color: ${props => props.theme.colorTerciary};
    text-decoration: line-through;
  }
  .deleted {
    color: ${props => props.theme.colorFourth};
    text-decoration: line-through;
  }
`;

export const ArrowContainer = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: ease .2s;

  &:hover {
    background-color: ${props => props.theme.backgroundPrimary};
  }
`;

export const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TodoContent = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const TodoDescription = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 15px;
  }
  span {
    margin-top: 20px;
    font-size: 12px;
  }
`;

export const TodoActions = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;


  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 10px;
    margin-right: 10px;

    height: 40px;
    width: 100px;

    background-color: ${props => props.theme.backgroundSecondary};
    border-radius: 8px;

    cursor: pointer;

    transition: ease .2s;

    &:hover {
      background-color: ${props => props.theme.backgroundPrimary};
    }

    svg {
      margin-right: 5px;
    }
  }
`;