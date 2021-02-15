import styled from 'styled-components'

import { motion } from 'framer-motion'

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

    width: 50%;
    height: 100%;
    background: linear-gradient(110deg,#9911FF, #7801FF);
    overflow: hidden;

    border-radius: 24px 0px 0px 24px;
`

export const Right = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px;

    width: 50%;
    height: 100%;
    background-color: #141414;
    border: 1px solid #242424;
    overflow: hidden;

    border-radius: 0px 24px 24px 0px;

    p{
        
    }
`

export const Circle = styled(motion.div)`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color:  #FFF;
    cursor: pointer;
`

export const LogLine = styled.div`
    display: flex;

    strong{
        color: #8F64EA;
        margin-right: 8px;
    }

    p{
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 16px;
        color: #727272;
    }
`