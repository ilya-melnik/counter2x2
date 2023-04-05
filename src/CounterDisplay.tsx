import React, {FC, useState} from 'react';
import styled from "styled-components";
import Button from "./Button";
import {Simulate} from "react-dom/test-utils";


type CounterDisplayType = {

    num: number
    maxValue:number
    error: boolean
    setError: (bool: boolean) => void
    functionInc: () => void
    functionRest: () => void
}
const CounterDisplay: FC<CounterDisplayType> = ({num, functionInc, functionRest, error,maxValue,setError}) => {
    console.log(error, "ERROR")
    return (
        <Wrapper>
            <Screen_Wrapper>
                <Number error={num >=maxValue? !error: error }>{num} </Number>
            </Screen_Wrapper>
            <Btn_Wrapper>
                <Button disabled={num >= maxValue } name={'inc'} callBack={functionInc}/>
                <Button name={'rest'} callBack={functionRest}/>
            </Btn_Wrapper>
        </Wrapper>
    );
};

export default CounterDisplay;
type NumberType = {
    error: boolean
}
const Number = styled.div<NumberType>`
  color: ${({error})=>error?"red":'#61dafb'};
  font-size: 113px;
`

const Wrapper = styled.div`
  margin: 30px auto;
  width: 550px;
  height: 410px;
  border: 3px solid #61dafb;
  border-radius: 9px;
`
const Screen_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 7px auto;
  width: 530px;
  height: 230px;
  border: 3px solid #61dafb;
  border-radius: 9px;
`
const Btn_Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
  width: 520px;
  height: 145px;
  border: 3px solid #61dafb;
  border-radius: 9px;
`
