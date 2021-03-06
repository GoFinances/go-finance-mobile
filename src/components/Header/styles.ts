import styled from "styled-components/native";

interface HeaderProps {
  small?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${({ small }: HeaderProps) => (small ? '140px' : '270px')};
  background-color: ${p => p.theme.colors.header_bg};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
`;

export const Logo = styled.Image`
  width: 200px;
`;
