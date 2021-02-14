import { useState } from 'react'

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

import * as S from './styles'

const SecondWidget = () => {
    const [selectedId, setSelectedId] = useState(null)

    const items = [
        {id: '1'}, 
        {id: '2'},
        {id: '3'},
        {id: '4'}
    ]

    return(
        <S.Container>
            <S.Left>
                <AnimateSharedLayout type="crossfade">
                    {items.map(item => (
                        <S.ClosedCard layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                            
                        </S.ClosedCard>
                    ))}
                
                    <AnimatePresence>
                        {selectedId && (
                        <S.OpenedCard layoutId={selectedId}>
                            
                            <motion.button onClick={() => setSelectedId(null)} />
                        </S.OpenedCard>
                        )}
                    </AnimatePresence>
                </AnimateSharedLayout>
            </S.Left>
            <S.Right></S.Right>
        </S.Container>
    )
}

export default SecondWidget