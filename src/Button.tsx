import React, {FC, useState} from 'react';
import styled from "styled-components";

type ButtonType = {
    name: string
    disabled?:boolean
    callBack: ()=> void
}
const Button: FC<ButtonType> = ({name, callBack,disabled,}) => {


    return (
        <Btn  disabled={disabled}  onClick={callBack}>
            {name}
        </Btn>
    );
};

export default Button;
type BtnType = {
    // inputError: boolean
    disabled?: boolean
}
const Btn = styled.button<BtnType>`
  background-color: ${({disabled})=>disabled? '#4D8791':'#61dafb'};
  color: #282c34;
  font-size: 30px;
  border-radius: 10px;
  width: 160px;
  height: 90px;
`
