import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { Container, ChallengeInative, ChallengeActive, Button } from './styles'

export function ChallengeBox(){
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

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
                        <Button type="button" onClick={resetChallenge} fail>
                            Falhei
                        </Button>

                        <Button type="button">
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