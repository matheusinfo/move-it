import { Header, Bar } from './styles'

export function ExperienceBar(){
    return (
        <Header>
            <span>0 xp</span>
            <Bar>
                <div style={{ width: '50%' }}/>
                <span style={{ left: '50%' }} >
                    300px
                </span>
            </Bar>
            <span>600px</span>
        </Header>
    )
}