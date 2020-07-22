import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface TypeSelectorProps {
  type: 'income' | 'outcome';
  selectedType: 'income' | 'outcome';
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
`;

export const TypeContainer = styled.TouchableOpacity`
  width: 50%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ type, selectedType }: TypeSelectorProps) => {
    if (type === selectedType && type === 'income') {
      return css`
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
        background-color: rgba(18, 164, 84, 0.5);
      `;
    }
    if (type === selectedType && type === 'outcome') {
      return css`
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
        background-color: rgba(232, 63, 91, 0.5);
      `;
    }
  }}
`;

export const TypeText = styled.Text`
  font-size: 14px;
  line-height: 30px;
  margin-left: 14px;
`;

export const Icon = styled(FeatherIcon)`
  font-size: 30px;
  ${({ type, selectedType }: TypeSelectorProps) => {
    if (type !== selectedType && type === 'income') {
      return css`
        color: #12A454;
      `;
    }
    if (type !== selectedType && type === 'outcome') {
      return css`
        color: #E83F5B
      `;
    }
  }}
`;

export const InvisibleInput = styled.TextInput`
  display: none;
`;