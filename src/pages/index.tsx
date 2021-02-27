import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Container, Section, LeftContainer } from './styles'
import { ExperienceBar, Profile, CompletedChallenges, Countdown, ChallengeBox } from '../components'
import { ChallengesProvider, CountdownProvider } from '../contexts'

type HomeProps = {
  level: number 
  currentExperience: number
  challengesCompleted: number
}

export default function Home({level, currentExperience, challengesCompleted}: HomeProps) {
  return (
    <ChallengesProvider level={level} currentExperience={currentExperience} challengesCompleted={challengesCompleted}>
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
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}