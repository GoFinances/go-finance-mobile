import React, { useRef, useCallback } from "react";

import { useNavigation } from '@react-navigation/native';

import { TextInput, KeyboardAvoidingView, Platform, Alert } from "react-native";

import api from '../../services/index'

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TypeTransactionSelector from "../../components/TypeTransactionSelector";
import Navigator from "../../components/Navigator";

import {
  Container, Title
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";

interface FormData {
  title: string;
  value: number;
  type: string;
  category: string;
}


const NewTransaction: React.FC = () => {
  const navigator = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const valueInputRef = useRef<TextInput>(null);
  const categoryInputRef = useRef<TextInput>(null);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required(),
          value: Yup.number().required(),
          type: Yup.string().required(),
          category: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        api.post("/transactions", data)
          .then(response => {
            Alert.alert("Parabéns", " Sua transação foi cadastrada com sucesso.");
            navigator.navigate('Dashboard');
          })

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro no da Transação',
          'Ocorreu um erro ao salvar a transação',
        );
      }
    },
    [],
  );


  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Header small={true} />
          <Container>
            <Title>Cadastro</Title>
            <Form ref={formRef} onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Input
                themeInput="light"
                returnKeyType="next"
                name="title"
                icon="file-text"
                placeholder="Nome"
                onSubmitEditing={() => {
                  valueInputRef.current.focus();
                }}
              />

              <Input
                themeInput="light"
                ref={valueInputRef}
                returnKeyType="next"
                autoCapitalize="words"
                name="value"
                icon="dollar-sign"
                placeholder="Valor"
                onSubmitEditing={() => {
                  categoryInputRef.current.focus();
                }}
              />

              <TypeTransactionSelector defaultValue="'income'" name="type" />

              <Input
                themeInput="light"
                ref={categoryInputRef}
                returnKeyType="send"
                autoCapitalize="words"
                name="category"
                icon="align-justify"
                placeholder="Categoria"
                onSubmitEditing={() => {
                  formRef.current.submitForm();
                }}
              />
              <Button onPress={() => formRef.current.submitForm()}>Enviar</Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <Navigator currentPage="NewTransaction" />
    </>
  )
}

export default NewTransaction;