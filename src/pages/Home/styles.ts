import styled from 'styled-components'

interface DegradeProps{
    color1: string,
    color2: string
}

interface ContainerProps {
    color: string
}


export const AllContainer = styled.div`
    min-height: 100vh;
    height: 100vh;
    max-width: 100vw;
`

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.color};
    width: 100vw;
`

export const FirstContainer = styled.div`
    display: flex;

    width: 100%;
    max-width: 2000px;
    margin: 0 auto;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    

    max-width: 1200px;
    margin: 0 auto;
    
    overflow: visible;

    @media(max-width: 800px){
        padding: 16px;
    }
`

export const Group = styled.div`
    display: flex;
`

export const TextGroup = styled.div`
    margin-top: 120px;
    margin-left: 108px;
    margin-bottom: 56px;

    display: flex;
    flex-direction: column;

    h1{
        display: flex;

        font-size: 108px;
        max-width: 400px;
        font-weight: bold;

        transition: 0.2s;

        &:hover{
            filter: brightness(0.8);
        }

        @media(max-width: 800px){
            font-size: 80px;
            max-width: 360px;
        }
    }

    p{
        font-size: 28px;
        font-weight: 600;
        line-height: 40px;
        max-width: 480px;
    }

    @media(max-width: 800px){
        margin-left: 0;
    }
`

export const TextTitle = styled.div`
    margin-bottom: 24px;
`

export const Degrade = styled.h1<DegradeProps>`
    font-size: 72px;
    background: -webkit-linear-gradient(10deg, ${props => props.color1}, ${props => props.color2});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 24px;
    
    h3{
        display: flex;
        align-items: center;
        margin-right: 24px;
        font-size: 28px;
        color: #DC27B4;
        cursor: pointer;

        @media(max-width: 800px){
            margin-bottom: 8px;
            font-size: 20px;
        }
    }

    @media(max-width: 800px){
        flex-direction: column;
    }
`

export const SecondTextGroup = styled(TextGroup)`
    div{
        h1{
            font-size: 80px;
            max-width: 900px;

            @media(max-width: 800px){
                font-size: 50px;
            }
        }
    }

    @media(max-width: 800px){
        margin-left: 0;
    }
    
`

export const FinalConsideration = styled.div`
    width: 1000px;
    margin: 108px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >div{
        display: flex;
        flex-direction: column;
        max-width: 600px;

        h1{
            font-size: 60px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        p{
            font-size: 28px;
            max-width: 550px;
            line-height: 40px;
        }
    }

    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 56px 0px;
        width: 100%;
    }
`

export const FinalConsiderationList = styled.ul`

    list-style: none;

    li{ 
        margin-top: 12px;
        display: flex;
        align-items: center;

        span{
            font-size: 20px;
            color: #FFF;
            margin-left: 8px;
        }
    }
`

export const LastContainer = styled.div`
    background-color: #457DFF;
`