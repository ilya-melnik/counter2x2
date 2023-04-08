import React, {FC, ReactNode, useState} from 'react';
import styled from "styled-components";
import Button from "./Button";
import {errorTextType, ErrorType} from "./App";


type CounterDisplayType = {

    num: number
    errorText: errorTextType
    maxValue: number
    error: ErrorType
    disabled: boolean
    // setError: (bool: boolean) => void
    functionInc: () => void
    functionRest: () => void
    minValue: number
    styleError:boolean
}
const CounterDisplay: FC<CounterDisplayType> = ({
                                                    disabled,
                                                    num,
                                                    functionInc,
                                                    functionRest,
                                                    error,
                                                    maxValue,
                                                    errorText,
                                                    minValue,
                                                    styleError
                                                }) => {

    // let [localError, setLocalError] = useState(false)

    const localErrorClassCondition = num >= maxValue || error === 'incorrectValue' ? styleError : styleError

    return (
        <Wrapper>
            <Screen_Wrapper>
                <Number  localError={localErrorClassCondition}>{error ? errorText[error] : num} </Number>
                {/*<Number error={num >=maxValue? !error: error }>{ num} </Number>*/}
            </Screen_Wrapper>
            <Btn_Wrapper>
                <Button disabled={error === 'incorrectValue' || styleError } name={'inc'} callBack={functionInc}/>
                <Button disabled={error === 'incorrectValue'} name={'rest'} callBack={functionRest}/>
            </Btn_Wrapper>
        </Wrapper>
    );
};

export default CounterDisplay;
type NumberType = {
    // maxValue?: number
    localError: boolean

}

const Number = styled.div<NumberType>`
  color: ${({localError}) => localError ? "red" : '#61dafb'};
  ${props => {

    // @ts-ignore
    // if (props.children[0] >= maxValue) {  при сравнивании с maxValue, выдает ошибку (нужно чтобы при maxValue кнопка увеличивалась)
    //   return "font-size: 97px;"
    // }  
    // @ts-ignore
    if (props.children[0] >= 0) {
      return "font-size: 87px;"
    } 
    else {
      return "font-size: 47px;"
    }
      }}
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
