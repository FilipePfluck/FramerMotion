import styled from 'styled-components'

interface ContainerProps {
    color1: string,
    color2: string
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background: linear-gradient(124deg, ${props => props.color1}, ${props => props.color2});
    border-radius: 16px;
    padding: 32px;

    @media(max-width: 800px){
        height: 480px;
    }
`

export const ChildrenContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const BottomContainer = styled.div`
    padding: 0 8px;
    width: 100%;
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    strong{
        font-size: 28px;
        font-weight: 600;
        color: #FFF;
    }

    div{
        display: flex;

        button{
            margin-left: 8px;
            border: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            width: 32px;
            border-radius: 50%;
            background: #333;
            opacity: 0.4;

            &:hover{
                filter: brightness(0.8);
            }
        }
    }
`