import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { darken } from 'polished'

FeatherIcon.loadFont();

interface IContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${darken(0.1, '#5636D3')};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${darken(0.1, '#5636D3')} ;

  flex-direction: row;
  align-items: center;

  ${props => props.isErrored && css`
    border-color: #ff0000
  `}

  ${props => props.isFocused && css`
    border-color: #FF872C
  `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #FFF;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  margin-left: 10px;
`;