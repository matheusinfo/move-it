import { Container, Section, LeftContainer } from './styles'
import { ExperienceBar, Profile, CompletedChallenges } from '../components'

export default function Home() {
  return (
    <Container>
      <ExperienceBar/>

      <Section>
          <LeftContainer>
            <Profile/>
            <CompletedChallenges/>
          </LeftContainer>

          <div>

          </div>
      </Section>
    </Container>
  )
}
