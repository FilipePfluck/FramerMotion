import styled from 'styled-components'

import {motion} from 'framer-motion'

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
    display: flex;
    flex-direction: column;
    padding: 24px;

    width: 40%;
    height: 100%;
    background-color: #141414;
    border: 1px solid #242424;

    border-radius: 0px 24px 24px 0px;
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
    width: 1200px;
    height: 480px;
    background-color: #FFF;
    border-radius: 32px;
`