import React from "react";
import logo from '../../assets/logo.png';


import {
  Container,
  Content,
  Logo,
  Date
} from "./styles";


interface IHeader {
  small?: boolean;
}

const Header: React.FC<IHeader> = ({ small }: IHeader) => {
  return (
    <Container small={small}>
      <Content>
        <Logo source={logo} />

        <Date>12 de Julho</Date>
      </Content>
    </Container>
  )
}

export default Header;