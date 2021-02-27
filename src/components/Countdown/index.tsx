import { useState, useEffect } from 'react'

import { Container, Counter, Button } from './styles'

let countDownTimeout: NodeJS.Timeout

export function Countdown(){
    const [time, setTime] = useState(0.1*60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDown(){
        setIsActive(true)
    }

    function resetCountDown(){
        clearTimeout(countDownTimeout)
        setIsActive(false)
        setTime(0.1*60)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }else if(isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time])

    return (
        <Container>
            <Counter>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </Counter>

            { hasFinished ? (
                <Button 
                    disabled
                >
                    Ciclo encerrado
                </Button>
            ) : (
                <>
                    { isActive ? (
                        <Button 
                            type="button"
                            onClick={resetCountDown}
                            stop
                        >
                            Abandonar ciclo
                        </Button>
                        ) : (
                        <Button 
                            type="button"
                            onClick={startCountDown}
                        >
                            Iniciar ciclo
                        </Button>
                    )}
                </>
            )}

           
        </Container>
    )
}