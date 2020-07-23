import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { Switch } from 'react-native-paper';

import logo from '../../assets/logo.png';

import { useTheme } from "../../hooks/theme";
import {
  Container,
  Content,
  Logo
} from "./styles";


interface IHeader {
  small?: boolean;
}

const Header: React.FC<IHeader> = ({ small }: IHeader) => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();

  return (
    <Container small={small}>
      <Content>
        <Logo source={logo} />
        <Switch
          trackColor={{ false: colors.secundary, true: colors.background }}
          thumbColor={title ? colors.secundary : colors.background}
          onValueChange={toggleTheme}
          value={title === 'dark'}
        />
      </Content>
    </Container>
  )
}

export default Header;