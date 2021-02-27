import Head from 'next/head'

import { Container, Section, LeftContainer } from './styles'
import { ExperienceBar, Profile, CompletedChallenges, Countdown, ChallengeBox } from '../components'
import { CountdownProvider } from '../contexts'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar/>

      <CountdownProvider>
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
      </CountdownProvider>
    </Container>
  )
}
