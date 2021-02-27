import { createContext, ReactNode, useState } from 'react'

import challenges from '../../challenges.json'

type ChallengesProviderProps = {
    children: ReactNode
}

type Challenge = {
    type: 'body' | 'eye'
    description: string
    amount: number
}

type ChallengesContextData = {
    level: number
    currentExperience: number
    challengesCompleted: number
    experienceToNextLevel: number
    activeChallenge: Challenge
    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
    completeChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider ({ children }: ChallengesProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp(){
        setLevel(level+1)
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        setActiveChallenge(challenge)
    }

    function completeChallenge(){
        if(!activeChallenge){
            return
        }

        const { amount } = activeChallenge
        let finalExperience = currentExperience + amount
        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp();
        }
        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted+1)
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    return(
        <ChallengesContext.Provider 
            value={{
                level, 
                currentExperience, 
                challengesCompleted, 
                experienceToNextLevel,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                completeChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}