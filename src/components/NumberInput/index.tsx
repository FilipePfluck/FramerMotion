import React, {Dispatch, SetStateAction} from 'react'

import {FiChevronUp, FiChevronDown} from 'react-icons/fi'

import * as S from './styles'

interface props{
    id?:string
    setValue: Dispatch<SetStateAction<number>>
    value: number
}

const NumberInput: React.FC<props> = ({children, value, id, setValue}) => {
    return(
        <S.NumberInputContainer>
            <input 
                id={id}
                value={value === 0 ? '':value}
                type="number" 
                onChange={e=>{setValue(Number(e.target.value))}}
            />
            <div>
                <button type="button" onClick={()=>{setValue(state=>state+1)}}>
                    <FiChevronUp/>
                </button>
                <button type="button" onClick={()=>{setValue(state=>state-1)}}>
                    <FiChevronDown/>
                </button>
            </div>
        </S.NumberInputContainer>
    )
}

export default NumberInput