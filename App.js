import React, { useState } from 'react';
import styled from 'styled-components/native';

//styles

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
`;

const Input = styled.TextInput`
  width: 90%
  height: 50px;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  background-color: #EEEEEE;
`;

export default () => {

  //states
  const [ bill, setBill ] = useState('');

  return (
    <Page>
      <HeaderText>Tip Calculator</HeaderText>
      <Input
        placeholder="What was the value of the bill?"
        keyboardType="numeric" //numeric keyboard
        value={bill} // bill value
        onChangeText={text=>setBill(text)}//change Input text
      />
    </Page>
    );
}
