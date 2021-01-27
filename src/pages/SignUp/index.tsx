import React, { useRef, useCallback } from "react";
import { Image, KeyboardAvoidingView, Platform, View, ScrollView, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/core";
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import api from '../../services';

import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.png';

import Button from '../../components/Button'
import Input from '../../components/Input'


import {
  Container,
  Title,
  BackToSignIn,
  BackToSignInText
} from './styles';


interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}


const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null)
  const passwrodInputRef = useRef<TextInput>(null)

  const navigation = useNavigation();


  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required().min(6, 'No mínimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { data: { success, message } } = await api.post(`/users`);
        if (!success)
          throw new Error(message);

        Alert.alert(
          'Cadastro realizado com sucesso',
          'Você já pode fazer login na aplicação.',
        );

        navigation.navigate('SignIn');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current.setErrors(errors);

          return;
        }

        if (err instanceof Error)
          Alert.alert('Erro na autenticação', err.message);
      }
    },
    [navigation],
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
          <Container >
            <Image source={logo} />

            <View>
              <Title>Crie a sua conta</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp} style={{ width: "100%" }}>
              <Input
                returnKeyType="next"
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                onSubmitEditing={() => {
                  emailInputRef.current.focus();
                }}
              />

              <Input
                ref={emailInputRef}
                returnKeyType="next"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                onSubmitEditing={() => {
                  passwrodInputRef.current.focus();
                }}
              />

              <Input
                ref={passwrodInputRef}
                secureTextEntry
                returnKeyType="send"
                textContentType="newPassword"
                name="password"
                icon="lock"
                placeholder="Senha"
                onSubmitEditing={() => formRef.current.submitForm()}
              />

              <Button onPress={() => formRef.current.submitForm()}>Cadastrar</Button>
            </Form>

          </Container >
        </ScrollView>

      </KeyboardAvoidingView>
      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#FFF" />
        <BackToSignInText>Volta para logon</BackToSignInText>
      </BackToSignIn>
    </>
  )
}

export default SignIn;