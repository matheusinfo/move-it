import { Container } from './styles'

export function Profile (){
    return (
        <Container>
            <img src="http://github.com/matheusinfo.png" alt="matheusinfo"/>
            <div>
                <strong>Matheus Andrade</strong>
                <p>
                    <img src="icons/level.svg" alt="Level up"/>
                    Level 1
                </p>
            </div>
        </Container>
    )
}