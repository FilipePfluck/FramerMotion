import React from 'react'

import { motion } from 'framer-motion'

import { FiRefreshCw, FiInfo } from 'react-icons/fi'

import * as S from './styles'

interface CardProps {
    color1: string
    color2: string
    name: string
    hasReplay?: boolean
    replayFunction?: Function
}

const Card: React.FC<CardProps> = ({
    color1, color2, name, hasReplay, replayFunction, children
}) => {
    return(
        <S.Container
            color1={color1}
            color2={color2}
        >
            <S.ChildrenContainer>
                {children}
            </S.ChildrenContainer>
            <S.BottomContainer>
                <strong>
                    {name}
                </strong>
                <div>
                    {
                        hasReplay && (
                            <motion.button 
                                onClick={()=>replayFunction()}
                                whileHover={{
                                    rotate: [0, 360]
                                }}
                            >
                                <FiRefreshCw size={18} color="#FFF"/>
                            </motion.button>
                        )
                    }
                    <button>
                        <FiInfo size={18} color="#FFF"/>
                    </button>
                </div>
            </S.BottomContainer>
        </S.Container>
    )
}

export default Card