import React, { useEffect, useState, useRef } from 'react'

import { motion, useTransform, useViewportScroll } from 'framer-motion'

import * as S from './styles'

import Card from './Card'

const FourthWidget = () => {
    const [animationCount, setAnimationCount] = useState(0)
    const [variantsCount, setVariantsCount] = useState(0)
    const [pathCount, setPathCount] = useState(0)

    const draggableRef = useRef(null)

    const scrollRef = useRef(null)

    const { scrollYProgress } = useViewportScroll()

    const scale = useTransform(scrollYProgress, [0.1, 1], [0.2, 2]);

    const container = {
        hidden: { 
            opacity: 0,
            scale: 0,
            transition: {
                duration: 2
            }
        },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }
      
      const item = {
        hidden: { 
            opacity: 0,
            y: 10
        },
        show: { 
            opacity: 1, 
            y: 0
        }
      }

      const icon = {
        hidden: {
          pathLength: 0,
          pathOffset: 10,
          pathSpacing: 0,
          fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
          pathLength: 1,
          pathOffset: 1000,
          pathSpacing: 1,
          fill: "rgba(255, 255, 255, 1)"
        }
      }

    return(
        <S.Container
            ref={scrollRef}
        >

            {/* Animation */}
            <Card
                color1="#F7088A"
                color2="#E500D6"
                name="Animation"
                hasReplay
                replayFunction={()=>{setAnimationCount(state => state+1)}}
            >
                <S.Square
                    animate={{
                        scale: [0, 1],
                        rotate: [0, 360]
                    }}
                    transition={{duration: 0.5}}
                    key={animationCount}
                />
            </Card>

            {/* Variants */}
            <Card
                color1="#DB02EE"
                color2="#9B11FF"
                name="Variants"
                hasReplay
                replayFunction={()=>{setVariantsCount(state => state+1)}}
            >
                <S.Variations
                    variants={container}
                    initial="hidden"
                    animate="show"
                    key={variantsCount}
                >
                    <motion.div variants={item}/>
                    <motion.div variants={item}/>
                    <motion.div variants={item}/>
                    <motion.div variants={item}/>
                </S.Variations>
            </Card>
            
            {/* Gestures */}
            <Card   
                color1="#9710FF"
                color2="#7901FF"
                name="Gestures"
            >   
                <S.Square
                    whileHover={{
                        rotate: 90,
                        scale: 1.2
                    }}
                    whileTap={{
                        scale: 0.8,
                        borderRadius: "54px"                    
                    }}
                />
            </Card>

            {/* Drag */}
            <Card
                color1="#7000FF"
                color2="#4500FF"
                name="Drag"
            >
                <S.Square
                    ref={draggableRef}
                    background="#724CFF"
                >
                    <S.Square 
                        animate={{scale: 0.6}}
                        drag
                        dragConstraints={draggableRef}
                    />
                </S.Square>
            </Card>

            {/* Scroll */}
            <Card
                color1="#4213FF"
                color2="#4353FF"
                name="Scroll"
            >
                <S.Square
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 16,
                        background: '#5362FF',
                        scale
                    }}
                >
                    <S.Square
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 8,
                            scaleY: scrollYProgress,
                            marginTop: 'auto'
                        }}
                    />
                </S.Square>
            </Card>

            {/* Path */}
            <Card
                color1="#4359FE"
                color2="#4797FF"
                name="Path"
                hasReplay
                replayFunction={()=>{setPathCount(state => state + 1)}}
            >
                <S.Square
                    style={{
                        backgroundColor: '#558FFF',
                        padding: 24
                    }}
                    key={pathCount}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                    >
                        <motion.path
                            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            startOffset={0}
                            transition={{duration: 1}}
                        />
                    </svg>
                </S.Square>
            </Card>
        
        </S.Container>
    )
}

export default FourthWidget