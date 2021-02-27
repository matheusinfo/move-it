import { Container, ChallengeInative, ChallengeActive, Button } from './styles'

export function ChallengeBox(){
    const hasActiveChallenge = true;

    return(
        <Container>
            {hasActiveChallenge ? (
                <ChallengeActive>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" alt="Corpo do desafio"/>
                        <strong>Novo desafio</strong>
                        <p>Acorda e coda</p>
                    </main>
                    <footer>
                        <Button type="button" fail>
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