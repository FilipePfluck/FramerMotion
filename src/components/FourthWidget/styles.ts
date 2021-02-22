import styled, { css } from 'styled-components'

import { motion } from 'framer-motion'

interface SquareProps {
    background ?: string
}

export const Container = styled.div`
    width: 100%;
    height: 800px;
    border-radius: 24px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 32px;

    @media(max-width: 800px){
        grid-template-columns: 1fr;
        height: auto;
    }

    margin-bottom: 80px;
`

export const Square = styled(motion.div)<SquareProps>`
    height: 108px;
    width: 108px;
    border-radius: 24px;
    background-color: ${props => props.background ? props => props.background : '#FFF'};
    overflow: hidden;
`

export const Variations = styled(motion.div)`
    height: 108px;
    width: 108px;
    border-radius: 24px;
    background-color: #CD4BF8;
    padding: 8px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 8px;

    div{
        height: 100%;
        width: 100%;
        background-color: #FFF;
        border-radius: 50%;
    }

`
