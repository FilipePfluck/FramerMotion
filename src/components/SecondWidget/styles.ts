import styled, { css } from 'styled-components'

import {motion, MotionProps} from 'framer-motion'

interface LiProps extends MotionProps{
    selectedId: string
}

export const Container = styled.div`
    width: 100%;
    height: 600px;
    border-radius: 24px;
    display: flex;
`

export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60%;
    height: 100%;
    background: linear-gradient(110deg,#BA10FF, #AA00FF);
    overflow: hidden;

    border-radius: 24px 0px 0px 24px;
`

export const Right = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px;

    width: 40%;
    height: 100%;
    background-color: #141414;
    border: 1px solid #242424;

    border-radius: 0px 24px 24px 0px;

    pre{
        code{
            font-size: 14px;
        }
    }
`

export const ClosedCard = styled(motion.div)`
    width: 800px;
    height: 100px;
    border-radius: 16px;
    background-color: #FFF;
`

export const OpenedCard = styled(motion.div)`
    position: absolute;
    z-index: 10;
    width: 400px;
    height: 200px;
    background-color: #FFF;
    border-radius: 48px;

    div{
        width: 100%;
        height: 100%;
        position: relative;
        padding: 16px;

        button{
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            right: 16px;
            border: 0;
            height: 25px;
            width: 25px;
            border-radius: 50%;
            background-color: #F4D6FF;
        }
        
        h1{
            position: absolute;
            top: 60px;
            height: 20px;
            width: 280px;
            background-color: #F4DCFF;
            border-radius: 2px;
        }

        h2{
            position: absolute;
            top: 96px;
            height: 20px;
            width: 240px;
            background-color: #F4DCFF;
            border-radius: 2px;
        }    
    }
`

export const SpansContainer = styled.div`
    position: absolute;
    top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span{
        height: 20px;
        width: 80px;
        background-color: #F4DCFF;
        border-radius: 2px;
    }
`

export const Ul = styled(motion.ul)`
    list-style: none;
    margin: 0;
    padding: 0;

    width: 80%;
    height: 60%;

    /* display: flex;
    flex-direction: column; */

    display: grid;
    grid-template-areas: "a b b b" "c c c d";

    /* grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr; */

    gap: 24px;
    padding: 20px;

`

export const Li = styled(motion.li)<LiProps>`
    list-style: none;
    margin: 0;
    padding: 0;

    background-color: #FFF;
    border-radius: 10px;
    padding: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: opacity 0.2s;
    
    ${props => props.selectedId && props.selectedId !== props.id && css`
        opacity: 0.4;
    `}

    &:last-child {
        margin-bottom: 0px;
    }

    h1{
        margin-top: 40px;
        margin-bottom: 8px;

        height: 18px;
        width: 120px;
        background-color: #F4DCFF;
        border-radius: 2px;
    }

    h2{
        height: 18px;
        width: 100px;
        background-color: #F4DCFF;
        border-radius: 2px;
    }

    &:nth-child(1){
        grid-area: a
    }

    &:nth-child(2){
        grid-area: b
    }

    &:nth-child(3){
        grid-area: c
    }

    &:nth-child(4){
        grid-area: d
    }
`


export const Avatar = styled(motion.div)`
    width: 40px;
    height: 40px;
    background-color: #666;
    border-radius: 20px;
`

export const Row = styled(motion.div)`
    width: 100%;
    height: 8px;
    background-color: #999;
    border-radius: 10px;
    margin-top: 12px;
`