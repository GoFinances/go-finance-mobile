import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { darken } from 'polished'

FeatherIcon.loadFont();

interface IContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  themeInput?: "light" | "dark" | undefined;
}

interface ITextInputProps {
  themeInput?: "light" | "dark" | undefined;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${p => p.themeInput && p.themeInput === 'light' ? p.theme.colors.input_bg : darken(0.1, '#5636D3')};
  border-radius: 10px;
  margin-bottom: 10px;
  border-width: 2px;
  border-color: 0px;
  flex-direction: row;
  align-items: center;

  ${props => props.isErrored && css`
    border-color: #ff0000;
  `}

  ${props => props.isFocused && css`
    border-color: #FF872C;
  `}
`;

export const TextInput = styled.TextInput<ITextInputProps>`
  flex: 1;
  color: ${p => p.themeInput && p.themeInput === 'light' ? p.theme.colors.text : '#FFF'};
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  margin-left: 10px;
`;