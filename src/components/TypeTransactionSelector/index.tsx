import React, { useState, useEffect, useRef, useCallback } from 'react';

import { TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import { Container, TypeContainer, TypeText, InvisibleInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

const TypeTransactionSelector: React.FC<InputProps> = ({ name }: InputProps) => {
  const { registerField, defaultValue = 'income', fieldName } = useField(name);
  const inputRef = useRef<any>({ value: defaultValue });
  const [selectedType, setSelectedType] = useState<'income' | 'outcome'>(
    'income'
  );

  useEffect(() => {
    inputRef.current.value = defaultValue
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',

    });
  }, [fieldName, registerField]);

  const handleTypeSelection = useCallback((type: 'income' | 'outcome') => {
    setSelectedType(type);
    inputRef.current.value = type;
  }, []);

  return (
    <Container>
      <TypeContainer
        type="income"
        selectedType={selectedType}
        onPress={() => handleTypeSelection('income')}
      >
        <Icon name="arrow-up-circle" type="income" selectedType={selectedType} />
        <TypeText>
          Income
          </TypeText>
      </TypeContainer>
      <TypeContainer
        type="outcome"
        selectedType={selectedType}
        onPress={() => handleTypeSelection('outcome')}
      >
        <Icon name="arrow-down-circle" type="outcome" selectedType={selectedType} />
        <TypeText >
          Outcome
        </TypeText>
      </TypeContainer>

      <InvisibleInput ref={inputRef} defaultValue={defaultValue || 'income'} />
    </Container>
  );
};

export default TypeTransactionSelector;