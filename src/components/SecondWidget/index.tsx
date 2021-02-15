import { useState, useRef } from 'react'

import { FiX } from 'react-icons/fi'

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

import * as S from './styles'

const SecondWidget = () => {

    const [selectedId, setSelectedId] = useState(null)

    const items = ['a', 'b', 'c', 'd']
    
    function Item({id, key}: {id: string, key: string}) {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleOpen = () => setIsOpen(!isOpen);
        
        return (
            <S.Li 
                selectedId={selectedId}
                id={id}
                layoutId={id} 
                layout 
                onClick={()=>setSelectedId(id)} 
                initial={{ borderRadius: 10 }}
            >
            <motion.h1 layout layoutId={`${id}h1`}/>
            <motion.h2 layout layoutId={`${id}h2`}/>
          </S.Li>
        );
      }

    return(
        <S.Container>
            <S.Left>
            <AnimateSharedLayout>
                <S.Ul layout initial={{ borderRadius: 25 }}>
                    {items.map((item) => (
                        <Item id={item} key={item} />
                    ))}
                </S.Ul>

                <AnimatePresence>
                    {selectedId && (
                        <S.OpenedCard 
                            layout 
                            layoutId={selectedId}
                        >
                            <div>
                                <button onClick={()=>setSelectedId(null)}>
                                    <FiX color="#C527FF" size={20}/>
                                </button>

                                <motion.h1 layout layoutId={`${selectedId}h1`}/>
                                <motion.h2 layout layoutId={`${selectedId}h2`}/>
                                <S.SpansContainer>
                                    <span/>
                                    <span/>
                                    <span/>
                                </S.SpansContainer>
                            </div>
                        </S.OpenedCard>
                    )}
                </AnimatePresence>

            </AnimateSharedLayout>
            </S.Left>
            <S.Right>
                <pre>
                    <code>
                        {`

const [selectedId, setSelectedId] = useState(null)
 
<AnimateSharedLayout type="crossfade">
  {items.map(item => (
    <motion.div 
        layoutId={item.id} 
        onClick={() => setSelectedId(item.id)}
    >
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
    </motion.div>
  ))}
 
  <AnimatePresence>
    {selectedId && (
      <motion.div layoutId={selectedIdentifier}>
        <motion.h5>{item.subtitle}</motion.h5>
        <motion.h2>{item.title}</motion.h2>
        <motion.button 
            onClick={() => setSelectedId(null)} 
        />
      </motion.div>
    )}
  </AnimatePresence>
</AnimateSharedLayout>
                        `}
                    </code>
                </pre>
            </S.Right>
        </S.Container>
    )
}

export default SecondWidget