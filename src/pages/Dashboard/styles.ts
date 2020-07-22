import styled from "styled-components/native";
import { FlatList } from "react-native";


export const Container = styled.View.attrs({
  showsHorizontalScrollIndicator: false
})`
`;

export const DashboardBody = styled.View`
  margin-top: -120px;
`;

export const CardsView = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 8,
    paddingRight: 32,
  },
  showsHorizontalScrollIndicator: false,
})`
`;

export const Title = styled.Text`
  margin: 15px 20px;
  color: #000;
  font-size: 25px;
  justify-content: flex-start;
`;


export const TransactionList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  margin: 0 auto;
`;


export const Footer = styled.View`
  margin-bottom: 80px;
  width: 100%;
`;