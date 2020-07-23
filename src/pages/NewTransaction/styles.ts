import styled from "styled-components/native";

export const Container = styled.View`
  background: ${p => p.theme.colors.background};
  height: 100%;
  padding: 20px;
`;

export const Title = styled.Text`
  color: ${p => p.theme.colors.secundary};
  font-size: 25px;
  margin: 20px 0 30px;
`;