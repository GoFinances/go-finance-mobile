import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Alert } from 'react-native';
import { useIsFocused, useScrollToTop } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth'

import api from '../../services';

import Transaction from '../../components/Transaction'
import Navigator from '../../components/Navigator';
import Card from '../../components/Card';
import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';


import {
  Container,
  DashboardBody,
  CardsView,
  TransactionList,
  Footer,
  Title,
} from './styles';



interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

export interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const isFocused = useIsFocused();
  const transactionListRef = useRef(null);

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalances] = useState<Balance>({} as Balance);

  const loadTransactions = useCallback(async () => {
    try {
      const { data: { success, message, result } } = await api.get(`/transactions`);
      if (!success)
        throw new Error(message);

      var { transactions, balance } = result;

      transactions.forEach((t: Transaction) => {
        t.formattedValue = formatValue(t.type === "outcome" ? (-1 * t.value) : t.value);
        t.formattedDate = formatDate(t.created_at);
      });

      balance = {
        income: formatValue(balance.income),
        outcome: formatValue(balance.outcome),
        total: formatValue(balance.total),
      }

      setBalances(balance);
      setTransactions(transactions);

    } catch (err) {
      if (err instanceof Error)
        Alert.alert('Erro na autenticação', err.message);

      signOut()
    }
  }, [signOut])


  useEffect(() => {
    if (isFocused) {
      transactionListRef.current.scrollToOffset({ animated: true, offset: 0 });
      loadTransactions();
    }
  }, [isFocused, loadTransactions]);

  const DashBoardHeader = (
    <Container style={{ flex: 1 }}>
      <Header />
      <DashboardBody>
        <CardsView>
          <Card date="Última entrada dia 10 de julho" icon="arrow-up-circle" type="Entradas" value={balance.income} />
          <Card date="Última saída dia 7 de julho" icon="arrow-down-circle" type="Saídas" value={balance.outcome} />
          <Card date="Entre 01 a 10 de julho" icon="dollar-sign" type="Total" value={balance.total} total />
        </CardsView>
        <Title>Listagem</Title>
      </DashboardBody>
    </Container>
  )

  return (
    <>
      <TransactionList
        ref={transactionListRef}
        ListHeaderComponent={DashBoardHeader}
        ListFooterComponent={Footer}
        data={transactions}
        keyExtractor={(transaction: Transaction) => transaction.id}
        renderItem={({ item }: { item: Transaction }) => (
          <Transaction
            key={item.id}
            title={item.title}
            type={item.type}
            value={item.formattedValue}
            category={item.category.title}
            date={item.formattedDate}
          />
        )}
      />
      <Navigator currentPage="Dashboard" />
    </>

  )
}

export default Dashboard;