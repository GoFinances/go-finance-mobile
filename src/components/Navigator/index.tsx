import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
// import { Icon } from 'react-native-vector-icons/Icon';

import { Container, LinkContainer, LinkText } from './styles';

const additionalStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,

  elevation: 24,
};

interface NavigatorProps {
  currentPage: 'Dashboard' | 'NewTransaction';
}

const Navigator: React.FC<NavigatorProps> = ({
  currentPage,
}: NavigatorProps) => {
  const [currentActivateLink, setCurrentActivateLink] = useState<
    'Dashboard' | 'NewTransaction'
    >();

  useEffect(() => {
    setCurrentActivateLink(currentPage);
  }, [currentPage]);

  const navigator = useNavigation();

  function handleNavigation(page: 'Dashboard' | 'NewTransaction') {
    navigator.navigate(page);
  }

  return (
    <Container style={additionalStyle}>
      <LinkContainer onPress={() => handleNavigation('Dashboard')}>
        <LinkText active={currentActivateLink === 'Dashboard'}>Listagem</LinkText>
      </LinkContainer>

      <LinkContainer onPress={() => handleNavigation('NewTransaction')}>
        <LinkText active={currentActivateLink === 'NewTransaction'}>Cadastrar</LinkText>
      </LinkContainer>
    </Container>
  );
};

export default Navigator;