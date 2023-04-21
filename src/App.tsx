import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CounterDisplay from "./CounterDisplay";
import SettingDisplay from "./SettingDisplay";


export type ErrorType = 'setValue' | 'incorrectValue' | null
export type errorTextType = {
    setValue: "enter values and press 'set'",
    incorrectValue: "Incorrect value!"
}

function App() {
    let [num, setNum] = useState(0)
    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [error, setError] = useState<ErrorType>(null)

    let [disabled, setDisabled] = useState<boolean>(true) //?
    let [styleError, setStyleError] = useState<boolean>(false)


    const errorText: errorTextType = {
        setValue: "enter values and press 'set'",
        incorrectValue: "Incorrect value!",
    }


    //localStorage does work correctly
    useEffect(() => {
        let getValueFromStorage = localStorage.getItem('minValue')
        if (getValueFromStorage) {
            let newValueFromStorage = JSON.parse(getValueFromStorage)
            setMinValue(newValueFromStorage)
        }

        let getValueFromStorage2 = localStorage.getItem('maxValue')
        if (getValueFromStorage2) {
            let newValueFromStorage2 = JSON.parse(getValueFromStorage2)
            setMaxValue(newValueFromStorage2)
        }
    }, [])




    const functionInc = () => {
        if (num >= minValue && num < maxValue) {    // нужно =<
            setNum(num => num + 1)
        }

        if (num >= maxValue) {
            setDisabled(true)
            setStyleError(true)
        }
    }
    const functionRest = () => {
        setNum(minValue)
        setStyleError(false)
    }

    const changeMinValue = (value: number) => {
        if (value < 0 || value >= maxValue) {
            setStyleError(true)
            setMinValue(value)
            setDisabled(true)
            setError('incorrectValue')

            return
        } else {
            setStyleError(false)
            setError('setValue')
            setMinValue(value)
            setDisabled(false)
        }


    }
    const changeMaxValue = (value: number) => {
        if (value <= minValue || minValue < 0 && value > minValue) {
            setStyleError(true)
            setMaxValue(value)
            setDisabled(true)
            setError('incorrectValue')
        } else {
            setStyleError(false)
            setError('setValue')
            setMaxValue(value)
            setDisabled(false)
        }


    }

    const setValue = () => {
        setNum(minValue)
        setDisabled(true)
        setError(null)
        setStyleError(false)

        localStorage.setItem('minValueStorage', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }


    return (
        <div className="App">
            <SettingDisplay
                setDisabled={setDisabled}
                callBack={setValue}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                error={error}
                num={num}
                maxValue={maxValue}
                minValue={minValue}
                disabled={disabled}/>


            <CounterDisplay num={num}
                            styleError={styleError}
                            errorText={errorText}
                            disabled={disabled}
                            functionInc={functionInc}
                            functionRest={functionRest}
                            error={error}
                            maxValue={maxValue}
                            minValue={minValue}
            />


        </div>
    );
}

export default App;
//need fix:  size error in counterDisplay
// если в инпуте ошибка тот инпут и подчеркивать, если ошибка в 2 input  значит подчеркнуть 2
//reuse input
