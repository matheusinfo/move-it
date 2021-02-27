import { Container, Section, LeftContainer } from './styles'
import { ExperienceBar, Profile, CompletedChallenges, Countdown, ChallengeBox } from '../components'

import Head from 'next/head'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar/>

      <Section>
          <LeftContainer>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </LeftContainer>

          <div>
            <ChallengeBox />
          </div>
      </Section>
    </Container>
  )
}
