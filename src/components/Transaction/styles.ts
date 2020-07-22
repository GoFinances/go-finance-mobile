import styled from "styled-components/native";
import FeatherIcon from 'react-native-vector-icons/Feather';

FeatherIcon.loadFont();

interface IValue {
  type: string;
}

export const Container = styled.View`
  background: #FFF;
  border-radius: 10px;
  height: 180px;
  width: 380px;
  margin: 5px 15px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 25px;
`;

export const Value = styled.Text<IValue>`
  color: ${p => p.type == 'outcome' ? "red" : "green"};
  margin-top: 15px;
  font-size: 25px;
`;

export const Footer = styled.View`
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(FeatherIcon)`
  font-size: 20px;
  color: #969CB2;
  margin-right: 5px;
`;

export const CategoryText = styled.Text`
  font-size: 20px;
  color: #969CB2;
`;

export const DateTransaction = styled.Text`
  font-size: 20px;
  color: #969CB2;
`;
