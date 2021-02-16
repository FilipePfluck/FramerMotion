import React, { useEffect, useState, useRef } from 'react'

import { motion, useTransform, useViewportScroll } from 'framer-motion'

import * as S from './styles'

import Card from './Card'

const FourthWidget = () => {
    const [count, setCount] = useState(0)
    const [variantsCount, setVariantsCount] = useState(0)

    const draggableRef = useRef(null)

    const scrollRef = useRef(null)

    const { scrollYProgress } = useViewportScroll()

    const scale = useTransform(scrollYProgress, [0, 1], [0, 2]);

    useEffect(()=>{
        console.log('count', count)
    },[count])

    useEffect(()=>{
        console.log('setVariantsCount', variantsCount)
    },[variantsCount])

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
                replayFunction={()=>{setCount(state => state+1)}}
            >
                <S.Square
                    animate={{
                        scale: [0, 1],
                        rotate: [0, 360]
                    }}
                    transition={{duration: 0.5}}
                    key={count}
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
                        width: 80,
                        height: 80,
                        borderRadius: 16,
                        background: '#5362FF',
                        scale
                    }}
                >
                    <S.Square
                        style={{
                            width: 80,
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
            >

            </Card>
        
        </S.Container>
    )
}

export default FourthWidget