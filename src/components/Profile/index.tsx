import { useContext } from 'react'

import { ChallengesContext } from '../../contexts/ChallengesContext'
import { Container } from './styles'

export function Profile (){
    const { level } = useContext(ChallengesContext)

    return (
        <Container>
            <img src="http://github.com/matheusinfo.png" alt="matheusinfo"/>
            <div>
                <strong>Matheus Andrade</strong>
                <p>
                    <img src="icons/level.svg" alt="Level up"/>
                    Level {level}
                </p>
            </div>
        </Container>
    )
}