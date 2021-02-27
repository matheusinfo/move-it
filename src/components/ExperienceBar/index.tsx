import { useContext } from 'react'

import { ChallengesContext } from '../../contexts/ChallengesContext'
import { Header, Bar } from './styles'

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <Header>
            <span>0 xp</span>
            <Bar>
                <div style={{ width: `${percentToNextLevel}%` }}/>
                <span style={{ left: `${percentToNextLevel}%` }} >
                    {currentExperience}px
                </span>
            </Bar>
            <span>{experienceToNextLevel}px</span>
        </Header>
    )
}