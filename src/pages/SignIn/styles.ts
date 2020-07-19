import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { darken } from "polished";
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === "android" ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #F0F2F5;
  margin: 65px 0 24px;
`;


export const ForgotPassword = styled.View`
  margin-top: 24;
`;

export const ForgotPasswordText = styled.Text`
  color: #F0F2F5;
  font-size:16px;
`;


export const CreateAccountBtn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #5636D3;
  border-top-width: 1px;
  border-color: ${darken(0.5, "#5636D3")};
  padding: 16px 0 ${10 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

export const CreateAccountBtnText = styled.Text`
  color: #FFF;
  font-size: 18px;
  margin-left: 16px;
`;