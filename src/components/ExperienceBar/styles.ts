import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;

    span {
        font-size: 16px;
    }
`

export const Bar = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;

    div{
        height: 4px;
        border-radius: 4px;
        background: var(--green);
        box-shadow: 0 0 1em var(--green);
    }

    span{
        position: absolute;
        top: 12px;
        transform: translateX(-50%);
    }
`
