import React from 'react';

import {
  Container,
  InfoCard,
  Icon,
  TypeText,
  ValueText,
  ContainerIcon,
  DateText
} from './styles';

interface ICardsProps {
  type: string;
  value: string;
  total?: boolean;
  icon: string;
  date: string;
}

const Card: React.FC<ICardsProps> = ({ type, value, total, icon, date }: ICardsProps) => {

  return (
    <Container total={total}>
      <InfoCard>
        <TypeText total={total}> {type} </TypeText>
        <ValueText total={total}> {value} </ValueText>
        <DateText total={total}>{date}</DateText>
      </InfoCard>
      <ContainerIcon>
        <Icon name={icon} total={total} />
      </ContainerIcon>
    </Container>
  )
}

export default Card;