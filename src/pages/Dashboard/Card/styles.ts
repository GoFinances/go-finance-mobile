import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

FeatherIcon.loadFont();

interface ITotalProps {
  total?: boolean;
}


export const Container = styled.View<ITotalProps>`
  background: ${p => p.total ? "#FF872C" : "#FFF"} ;
  border-radius: 10px;
  height: 200px;
  width: 380px;
  margin: 0px 7px;
  flex-direction: row;
  justify-content:space-between;
`;

export const InfoCard = styled.View`
`;

export const ContainerIcon = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Icon = styled(FeatherIcon) <ITotalProps>`
  font-size: 50px;
  margin: 15px 40px;
  color: #FF872C;

  ${p => p.total && css`
    color: #FFF;
  `}
`;


export const TypeText = styled.Text<ITotalProps>`
  font-size: 20px;
  line-height: 30px;
  color: #969CB2;
  margin-top: 40px;
  margin-left: 24px;
  text-transform: uppercase;

    ${p => p.total && css`
      color: #FFF;
    `}
`;

export const ValueText = styled.Text<ITotalProps>`
  font-size: 40px;
  line-height: 50px;
  color: #000;
  margin-top: 40px;
  margin-left: 24px;
  ${p => p.total && css`
      color: #FFF;
  `}
`;

export const DateText = styled.Text<ITotalProps>`
  color: #969CB2;
  line-height: 30px;
  margin-left: 35px;

    ${p => p.total && css`
      color: #FFF;
    `}
`;
