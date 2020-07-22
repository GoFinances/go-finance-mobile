import styled from "styled-components/native";
import { FlatList } from "react-native";


export const Container = styled.View.attrs({
  showsHorizontalScrollIndicator: false
})`
  background: #5636D3;
`;

export const Header = styled.View.attrs({
  showsHorizontalScrollIndicator: false
})`
  background: #5636D3;
`;

export const CardsView = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 8,
    paddingRight: 32,
  },
  showsHorizontalScrollIndicator: false,
})`
  top:100px;
`;

export const Title = styled.Text`
  margin: 0px 20px;
  top: 150px;
  color: #000;
  font-size: 25px;
`;


export const TransactionList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  background:#E5E5E5;
  width: 100%;
  margin: 0 auto;
`;


export const Footer = styled.View`
  margin-bottom: 300px;
  width: 100%;
`;