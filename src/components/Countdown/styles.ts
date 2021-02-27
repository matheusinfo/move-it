import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);
`

export const Counter = styled.div`
    display: flex;

    div{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background: var(--white);
        box-shadow: 0 0 60px rgba(0,0,0,0.05);
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;

        span{
            min-width: 100px;
            padding: 0 15px;
            border-right: 1px solid #f0f1f3;
            border-left: 1px solid #f0f1f3;
        }
    }

    >span{
        font-size: 6.25rem;
        margin: 0 0.5rem;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 5rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    font-weight: 600;
    transition: background-color 0.2s;
    color: var(--white);
    background: ${props => props.stop ? 'var(--red)' : 'var(--blue)'};

    &:not(:disabled):hover{
        background: ${props => props.stop ? 'var(--red-dark)' : 'var(--blue-dark)'};
    }

    &:disabled{
        border: 0;
        border-bottom: 5px solid var(--green);
        background: var(--white);
        color: var(--text);
        cursor: not-allowed;
    }
`