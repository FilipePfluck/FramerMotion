import { useState, useRef, useCallback } from 'react'

import { PanInfo, TapInfo } from 'framer-motion'

import * as S from './styles'

const ThirdWidget = () => {

    interface consoleLog{
        type: string,
        log: string
    }

    interface SetConsoleLogProps {
        info: PanInfo | TapInfo
        type: string
    }

    const [log, setLog] = useState<consoleLog[]>([])

    const DraggableContainer = useRef(null)

    const SetConsoleLog = useCallback(({info, type}: SetConsoleLogProps)=>{
        setLog(state => {
            const stateCopy = state

            var newLog

            if(state.length === 16){
                stateCopy.shift()
            }

            if(info instanceof PanInfo){
                newLog = {
                    type,
                    log:  `point:{x: ${info.point.x}, y: ${info.point.y}} delta: {x: ${info.delta.x}, y: ${info.delta.y}} offset: {x: ${info.offset.x}, y: ${info.offset.y}} velocity: {x: ${info.velocity.x}, y: ${info.velocity.y}} \n`
                }
            }

            return [...stateCopy, newLog]
        })
    },[])

    return(
        <S.Container>
            <S.Left ref={DraggableContainer}>
                <S.Circle
                    whileTap ={{
                        scale: 0.9
                    }}
                    animate={{
                        scale: 1
                    }}
                    drag
                    dragConstraints={DraggableContainer}
                    onDrag={(event, info)=>{
                        SetConsoleLog({info, type: 'onDrag'})
                    }}
                    onTap={(event, info)=>{
                        SetConsoleLog({info, type: 'onTap'})
                    }}
                />
            </S.Left>
            <S.Right>
                {log && log.map(log => (
                    <S.LogLine>
                        <strong>{log.type}</strong>
                        <p>{log.log}</p>
                    </S.LogLine>
                ))}
            </S.Right>
        </S.Container>
    )
}

export default ThirdWidget