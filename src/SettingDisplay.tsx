import React, {ChangeEvent, FC} from 'react';
import styled from "styled-components";
import Button from "./Button";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {errorTextType, ErrorType} from "./App";


type SettingDisplayType = {
    error: ErrorType
    num: number
    minValue: number
    maxValue: number
    disabled: boolean
    callBack: () => void
    changeMinValue: (value: number) => void
    changeMaxValue: (value: number) => void

    setDisabled: (bool: boolean) => void
}


const SettingDisplay: FC<SettingDisplayType> = ({
                                                    setDisabled,
                                                    callBack,
                                                    changeMinValue,
                                                    changeMaxValue,
                                                    num,
                                                    maxValue,
                                                    minValue,
                                                    disabled,
                                                    error
                                                }) => {

    const getMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let minCurrentValue = +e.currentTarget.value
        changeMinValue(minCurrentValue)
    }

    const getMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let maxCurrentValue = +e.currentTarget.value
        changeMaxValue(maxCurrentValue)

    }
    return (
        <Wrapper>
            <Screen_Wrapper>
                {/*// do i need create component Input ?*/}
                <Span> maxValue: <Input error={error === 'incorrectValue'} value={maxValue} type={"number"}
                                        onChange={getMaxValue}/></Span>
                <Span> minValue: <Input error={error === 'incorrectValue'} value={minValue} type={"number"} onChange={getMinValue}/></Span>
            </Screen_Wrapper>

            <Btn_Wrapper>

                <Button disabled={disabled} name={'set'} callBack={callBack}/>
            </Btn_Wrapper>
        </Wrapper>
    );
};

export default SettingDisplay;
type InputType = {
    error: boolean
}
const Input = styled.input<InputType>`
  border: ${({error}) => error ?
          '2px solid red; ' +
          'background-color: rosybrown;':
          ''}

`
const Span = styled.span`
  color: #61dafb;
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
