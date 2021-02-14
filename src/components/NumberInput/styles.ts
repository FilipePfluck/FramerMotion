import styled from 'styled-components'

export const Container = styled.div`

`

export const NumberInputContainer = styled.div`
    padding: 0 12px;
    background-color: #242424;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
   
    input{
        background-color: #242424;
        width: 40px;
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
            font-size: 14px;
        }
    }
`