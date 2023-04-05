import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CounterDisplay from "./CounterDisplay";
import SettingDisplay from "./SettingDisplay";


type ErrorType = "valueError" | "settingError" | null
function App() {
    let [num, setNum] = useState(0)
    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [error, setError] = useState<ErrorType>(null)
    let [disabled, setDisabled] = useState<boolean>(true)

    let displayState = "setText"


    const errorText = {
        valueError : "value vary Height",
        settingError : "incorrect value"
    }

    const displayRenderText = {
        "error" :  "incorrect value",
        "counter" : minValue,
        "setText" : "please press set"
    }


    const functionInc = () => {

        if (num >= minValue && num < maxValue) {    // нужно =<
            setNum(num => num + 1)

        }
        if (num >= maxValue) {
            setDisabled(true)
        }
    }
    const functionRest = () => {
        setNum(minValue)
    }

    const changeMinValue = (value: number) => {
        if(value < 0){
            setMinValue(value)
            setError('settingError')
            setDisabled(true)
            return
        }
        else {
            setError(null)
            setMinValue(value)
            setDisabled(false)
        }


    }
    const changeMaxValue = (value: number) => {
        setMaxValue(value)
        setDisabled(false)
    }

    const setValue = () => {
        setNum(minValue)
        setDisabled(true)
    }
    return (
        <div className="App">
            <SettingDisplay
                setDisabled={setDisabled}
                callBack={setValue}
                changeMinValue={changeMinValue}
                changeMaxValue={changeMaxValue}
                setError={()=>{}}
                num={num}
                maxValue={maxValue}
                minValue={minValue}
                disabled={disabled}/>

            {error ? errorText[error] : ''}
            <CounterDisplay num={num}
                            functionInc={functionInc}
                            functionRest={functionRest}
                            error={false}
                            maxValue={maxValue}
                            setError={()=>{}}/>


        </div>
    );
}

export default App;
