import styled from 'styled-components';

export const Container = styled.aside`
  
  background-color: ${props => props.theme.backgroundSecondary};

  position: relative;

  height: 100vh;
  width: 400px;

  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 768px) {
    position: fixed;
    width: 100%;
  }

  ul {

    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      height: 50px;
      padding: 15px;
      margin-top: 10px;
      border-radius: 8px;
      background-color: ${props => props.theme.backgroundPrimary};
      cursor: pointer; 
      transition: ease .2s;

      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      &:hover{
        background-color: ${props => props.theme.colorPrimary};
      }
    }

    .new {
      transition: ease .2s;

      &:hover{
        background: ${props => props.theme.colorTerciary};
        color: #222;
      }
    }

    .deleted {
      transition: ease .2s;

      &:hover{
        background: ${props => props.theme.colorFourth};
      }
    }

    .new-active {
      background: ${props => props.theme.colorTerciary};
      color: #222;
    }
    .deleted-active {
      background: ${props => props.theme.colorFourth};
    }
    .other-active {
      background: ${props => props.theme.colorPrimary};
    }
  }

  .footer {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    display: flex;
    align-items: center;
    justify-content: center;

    align-self: center;

    height: 50px;
    width: 150px;

    border-radius: 8px;
    background-color: ${props => props.theme.colorPrimary};

    cursor: pointer;

    transition: ease .2s;

    &:hover{
      opacity: .7;
    }

    p {
      margin-left: 10px;
      font-weight: bold;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: none;
  }

  @media(max-width: 768px) {
    div {
      height: 30px;
      width: 30px;
      background: ${props => props.theme.colorPrimary};

      display: flex;
      justify-content:center;
      align-items:center;

      border-radius: 8px;

      cursor: pointer;

      transition: ease .2s;

      &:hover {
        opacity: .7;
      }
    }
  }
`;