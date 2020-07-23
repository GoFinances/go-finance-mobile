import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${p => p.theme.colors.secundary};
  border-radius: 10px;
  
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${p => p.theme.colors.textSecundary};
  font-size: 16px;
  font-weight: bold;
`;