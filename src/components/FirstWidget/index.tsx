import { useState } from 'react'

import * as S from './styles'

import NumberInput from '../NumberInput'

const FirstWidget = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)

    return(
        <S.Container>
            <S.Left>
                <S.Square
                    animate={{
                        x,
                        y,
                        scale,
                        rotate,
                    }}
                />
            </S.Left>
            <S.Right>
                <S.Code>
                    <p>{'<motion.div'}</p>
                    <p style={{textIndent:20}}>{'animate={{'}</p>
                    <p style={{textIndent:40}}>{`x: ${x},`}</p>
                    <p style={{textIndent:40}}>{`y: ${y},`}</p>
                    <p style={{textIndent:40}}>{`scale: ${scale},`}</p>
                    <p style={{textIndent:40}}>{`rotate: ${rotate},`}</p>
                    <p style={{textIndent:20}}>{'}}'}</p>
                    <p>{'/>'}</p>
                </S.Code>
                <S.Switches>
                    <S.InputLine>
                        <S.Label htmlFor="X">X</S.Label>
                        <NumberInput id="X" value={x} setValue={setX}/>
                        <S.Range 
                            type="range"
                            min={-100}
                            max={100}
                            onChange={e=>{setX(Number(e.target.value))}}
                        />
                    </S.InputLine>
                    <S.InputLine>
                        <S.Label htmlFor="Y">Y</S.Label>
                        <NumberInput id="Y" value={y} setValue={setY}/>
                        <S.Range 
                            type="range"
                            min={-100}
                            max={100}
                            onChange={e=>{setY(Number(e.target.value))}}
                        />
                    </S.InputLine>
                    <S.InputLine>
                        <S.Label htmlFor="Scale">Scale</S.Label>
                        <NumberInput id="Scale" value={scale} setValue={setScale}/>
                        <S.Range 
                            type="range"
                            min={0.1}
                            step={0.1}
                            max={2}
                            onChange={e=>{setScale(Number(e.target.value))}}
                        />
                    </S.InputLine>
                    <S.InputLine>
                        <S.Label htmlFor="Rotate">Rotate</S.Label>
                        <NumberInput id="Rotate" value={rotate} setValue={setRotate}/>
                        <S.Range 
                            type="range"
                            min={0}
                            max={360}
                            onChange={e=>{setRotate(Number(e.target.value))}}
                        />
                    </S.InputLine>
                </S.Switches>
            </S.Right>
        </S.Container>
    )
}

export default FirstWidget