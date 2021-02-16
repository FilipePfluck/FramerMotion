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

    const isPan = useCallback((info: PanInfo | TapInfo): info is PanInfo=>{
        return (info as PanInfo).delta !== undefined
    },[])

    const SetConsoleLog = useCallback(({info, type}: SetConsoleLogProps)=>{
        setLog(state => {
            const stateCopy = state

            var newLog

            if(state.length === 16){
                stateCopy.shift()
            }

            if(isPan(info)){
                newLog = {
                    type,
                    log:  `point:{x: ${info.point.x}, y: ${info.point.y}} delta: {x: ${info.delta.x}, y: ${info.delta.y}} offset: {x: ${info.offset.x}, y: ${info.offset.y}} velocity: {x: ${info.velocity.x}, y: ${info.velocity.y}} \n`
                }
            }else{
                newLog = {
                    type,
                    log:  `point:{x: ${info.point.x}, y: ${info.point.y}}  \n`
                }
            }

            return [...stateCopy, newLog]
        })
    },[isPan])

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
                    onDragStart={(event, info)=>{
                        SetConsoleLog({info, type: 'onDragStart'})
                    }}
                    onDragEnd={(event, info)=>{
                        SetConsoleLog({info, type: 'onDragEnd'})
                    }}
                    onTap={(event, info)=>{
                        SetConsoleLog({info, type: 'onTap'})
                    }}
                    onTapStart={(event, info)=>{
                        SetConsoleLog({info, type: 'onTapStart'})
                    }}
                    onTapCancel={(event, info)=>{
                        SetConsoleLog({info, type: 'onTapCancel'})
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