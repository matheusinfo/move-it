import { useState, useEffect, useContext } from 'react'

import { Container, Counter, Button } from './styles'
import { CountdownContext } from '../../contexts/CountdownContext'

export function Countdown(){
    const { minutes, seconds, hasFinished, isActive, startCountDown, resetCountDown } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
                    Ciclo encerrado :D
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