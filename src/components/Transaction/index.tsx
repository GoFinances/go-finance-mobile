import React from 'react';
import {
  Container,
  Title,
  Value,
  Footer,
  CategoryContainer,
  Icon,
  DateTransaction,
  CategoryText
} from './styles';


interface ITransaction {
  title: string;
  type: string;
  value: string;
  category: string;
  date: string;
}

const Transaction: React.FC<ITransaction> = ({ category, value, title, type, date }: ITransaction) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Value type={type}>{value}</Value>
      <Footer>
        <CategoryContainer>
          <Icon name="dollar-sign" />
          <CategoryText>{category}</CategoryText>
        </CategoryContainer>
        <DateTransaction>{date}</DateTransaction>
      </Footer>
    </Container>
  )
}

export default Transaction;