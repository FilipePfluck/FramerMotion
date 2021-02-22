import styled from 'styled-components'

import {motion} from 'framer-motion'

export const Container = styled.div`
    width: 100%;
    height: 600px;
    border-radius: 24px;
    display: flex;

    @media(max-width: 800px){
        flex-direction: column;
        height: 100%;
    }

    margin-bottom: 80px;
`

export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 75%;
    height: 100%;
    background: linear-gradient(110deg, #EE009A, #DE00EB);
    overflow: hidden;

    border-radius: 24px 0px 0px 24px;

    @media(max-width: 800px){
        width: 100%;
        padding: 48px 0;

        border-radius: 24px 24px 0px 0px;
    }
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;

    width: 25%;
    height: 100%;
    background-color: #141414;
    border: 1px solid #242424;

    border-radius: 0px 24px 24px 0px;

    @media(max-width: 800px){
        width: 100%;
        flex-direction: row;

        border-radius: 0px 0px 24px 24px;
    }
`

export const Square = styled(motion.div)`
    background-color: #FFFFFF;
    height: 200px;
    width: 200px;
    border-radius: 16px;
`

export const Code = styled.div`
    height: 50%;

    border-bottom: 1px solid #242424;
    padding: 16px;
    
    @media(max-width: 800px){
        border-bottom: 0px;
        border-right: 1px solid #242424;

        height: 100%;
        width: 50%;
    }

    @media(max-width: 400px){
        display: none;
    }
`

export const Switches = styled.form`
    height: 50%;
    padding: 16px;

    @media(max-width: 800px){
        border-left: 1px solid #242424;

        height: 100%;
        width: 50%;
    }

    @media(max-width: 400px){
        padding: 0px;
        border: none;
        width: 100%;
    }
`

export const InputLine = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 16px 0;

    @media(max-width: 400px){
        justify-content: space-between;
    }
`

export const NumberInputContainer = styled.div`
    padding: 0 12px;
    background-color: #242424;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
   
    input{
        background-color: #242424;
        width: 50px;
        border: 0;

        color: #FFF;

        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;

        &::-webkit-inner-spin-button{
            -webkit-appearance: none;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        margin: 4px 0;

        button{
            border: 0;
            background-color: #242424;        
            color: #FFF;
            font-size: 16px;
        }
    }
`

export const Label = styled.label`
    height: 100%;
    width: 60px;
    margin-right: 8px;
`

export const Range = styled.input`
    margin-left: 8px;
    width: 80px;
    -webkit-appearance: none;

    height: 4px;
    border-radius: 1px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background: #EE009A;
        cursor: pointer;
    }
`