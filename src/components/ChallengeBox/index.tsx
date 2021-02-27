import { useContext } from 'react';
import { CountdownContext } from '../../contexts';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container, ChallengeInative, ChallengeActive, Button } from './styles'

export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountDown } = useContext(CountdownContext)

    function handleChallengeSucceceded(){
        completeChallenge()
        resetCountDown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountDown()
    }

    return(
        <Container>
            {activeChallenge ? (
                <ChallengeActive>
                    <header>Ganhe {activeChallenge.amount}xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Corpo do desafio"/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <Button type="button" onClick={handleChallengeFailed} fail>
                            Falhei
                        </Button>

                        <Button type="button" onClick={handleChallengeSucceceded}>
                            Completei
                        </Button>
                    </footer>
                </ChallengeActive>
            ) : (
                <ChallengeInative>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up"/>
                        Avance de level completando desafios.
                    </p>
                </ChallengeInative>
            )}
        </Container>
    )
}