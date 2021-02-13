import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    z-index: 20;
    background-color: #141414;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: #252525 1px solid;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1000px;

    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 18px;
    }

    div{
        display: flex;
        align-items: center;

        p{
            transition: 0.2s;
            cursor: pointer;
            color: #AAA;

            &:hover{
                color: #EDEDE8;
            }
        }
    }
`

export const Button = styled.button`
    background-color: #9923EE;
    padding: 12px;
    border-radius: 24px;
    border: 0;
    margin-left: 16px;
    transition: 0.2s;
    color: #FFF;
    font-weight: 600;

    &:hover{
        filter: brightness(0.6)
    }
`