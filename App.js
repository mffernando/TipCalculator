import React, { useState, useEffect } from 'react';
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

const CalcButton = styled.Button`
  margin-top: 10px;
`;

const ResultArea = styled.View`
  width: 90%;
  margin-top: 30px;
  background-color: #EEEEEE;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 16px;
  margin-bottom: 30px;
`;

const PercentageArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;

const PercentageItem = styled.Button`
`;

export default () => {

  //states
  const [ bill, setBill ] = useState('');
  const [ tip, setTip ] = useState(0);
  const [ percentage, setPercentage ] = useState(10); //default 10%

  //functions
  const calculate = () => {
    let numericBill = parseFloat(bill); //convert to float

      //validate
      if (numericBill) {
        //setTip(numericBill * 0.1); //tip = 10%
        setTip((percentage/100) * numericBill);
      }
  }

  //hooks - effect
  //waiting for 'percentage' state change to update the calc
  useEffect(() => {
    calculate();
    //alert("percentage changed")
  }, [percentage]);

  return (
    <Page>
      <HeaderText>Tip Calculator</HeaderText>
      <Input
        placeholder="What was the value of the bill?"
        keyboardType="numeric" //numeric keyboard
        value={bill} // bill value
        onChangeText={text=>setBill(text)}//change Input text
      />
      <PercentageArea>
        <PercentageItem title="5%" onPress={()=>setPercentage(5)} />
        <PercentageItem title="10%" onPress={()=>setPercentage(10)} />
        <PercentageItem title="15%" onPress={()=>setPercentage(15)} />
        <PercentageItem title="20%" onPress={()=>setPercentage(20)} />
      </PercentageArea>
      <CalcButton title={`Calculate ${percentage}%`} onPress={calculate} />
      {tip > 0 &&
        //show result area
        <ResultArea>
          <ResultItemTitle>Bill</ResultItemTitle>
          <ResultItem>$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Tip</ResultItemTitle>
          <ResultItem>$ {tip.toFixed(2)} ({percentage}%)</ResultItem>

          <ResultItemTitle>Total</ResultItemTitle>
          <ResultItem>$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }
    </Page>
    );
}
