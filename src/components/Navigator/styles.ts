import styled, { css } from 'styled-components/native';

interface NavigatorProps {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 76px;
  position: absolute;
  bottom: 0;
  background-color: ${p => p.theme.colors.background};
`;

export const LinkContainer = styled.TouchableOpacity<NavigatorProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  height: 100%;
`;

export const LinkText = styled.Text<NavigatorProps>`
  font-size: 14px;
  line-height: 21px;
  color: ${props => props.active ? props.theme.colors.secundary : props.theme.colors.navigation_disabled};


`;