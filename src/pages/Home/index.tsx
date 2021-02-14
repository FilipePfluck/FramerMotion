import { FiArrowRight, FiCheck } from 'react-icons/fi'

import * as S from './styles'

import Header from '../../components/Header'

import FirstWidget from '../../components/FirstWidget'
import SecondWidget from '../../components/SecondWidget'
import ThirdWidget from '../../components/ThirdWidget'
import FourthWidget from '../../components/FourthWidget'

const Home = ()=>{
    return(
        <S.Container>
            <Header/>
            <S.Content>
                <S.Group>
                    <S.TextGroup>
                        <S.TextTitle>
                            <h1>Framer</h1>
                            <S.Degrade color1='#891CEE' color2='#C113C4'>Motion</S.Degrade>
                        </S.TextTitle>
                        <p>A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams. Proudly open source.</p>
                        <S.LinksContainer>
                            <h3>
                                Check out the API 
                                <FiArrowRight/>
                            </h3>
                            <h3>
                                View on Github
                                <FiArrowRight/>
                            </h3>
                        </S.LinksContainer>
                    </S.TextGroup>
                </S.Group>
                
                <S.Group>
                    <S.SecondTextGroup>
                        <S.TextTitle>
                            <h1>Production-ready</h1>
                            <S.Degrade color1="#BB01DB" color2="#CA11BC">declarative animations.</S.Degrade>
                        </S.TextTitle>
                        <p>A production-ready motion library for React. Utilize the power behind Framer, the best prototyping tool for teams. Proudly open source.</p>
                        <S.LinksContainer>
                            <h3>
                                View the API 
                                <FiArrowRight/>
                            </h3>
                        </S.LinksContainer>
                    </S.SecondTextGroup>
                </S.Group>
                
                <FirstWidget/>
                
                <S.Group>
                    <S.SecondTextGroup>
                        <S.TextTitle>
                            <S.Degrade color1="#B80FFF" color2="#AD02FF">Animations that</S.Degrade>
                            <h1>work like magic.</h1>
                        </S.TextTitle>
                        <p>When animating between two separate components, Framer Motion will take care of everything in between.</p>
                        <S.LinksContainer>
                            <h3>
                                Get started
                                <FiArrowRight/>
                            </h3>
                        </S.LinksContainer>
                    </S.SecondTextGroup>
                </S.Group>
   
                <SecondWidget/>

                <S.Group>
                    <S.SecondTextGroup>
                        <S.TextTitle>
                            <h1>Complex events</h1>
                            <S.Degrade color1="#A520FF" color2="#8E15FF">and gestures.</S.Degrade>
                        </S.TextTitle>
                        <p>Framer Motion offers more advanced listeners and also extends the basic set of React event listeners.</p>
                        <S.LinksContainer>
                            <h3>
                                View the API
                                <FiArrowRight/>
                            </h3>
                        </S.LinksContainer>
                    </S.SecondTextGroup>
                </S.Group>
            
                <ThirdWidget/>
            
                <S.Group>
                    <S.SecondTextGroup>
                        <S.TextTitle>
                            <h1>Features</h1>
                        </S.TextTitle>
                        <p>Explore the latest features. See why Framer Motion is the best React animation library.</p>
                        <S.LinksContainer>
                            <h3>
                                See more examples
                                <FiArrowRight/>
                            </h3>
                        </S.LinksContainer>
                    </S.SecondTextGroup>
                </S.Group>
                
                <FourthWidget/>

                {/* <S.FinalConsideration>
                    <div>
                        <h1>Get started with Framer Motion</h1>
                        <p>There’s a whole lot more to discover, dive into the complete API reference for Motion.</p>
                        <S.LinksContainer>
                            <h3>
                                Check out the API 
                                <FiArrowRight/>
                            </h3>
                            <h3>
                                View on Github
                                <FiArrowRight/>
                            </h3>
                        </S.LinksContainer>
                    </div>

                    <S.FinalConsiderationList>
                        <li>
                            <FiCheck color={'#3A80D3'} size={24}/>
                            <span>useSpring</span>
                        </li>
                        <li>
                            <FiCheck color={'#3A80D3'} size={24}/>
                            <span>Server-side rendering</span>
                        </li>
                        <li>
                            <FiCheck color={'#3A80D3'} size={24}/>
                            <span>CSS variable support</span>
                        </li>
                        <li>
                            <FiCheck color={'#3A80D3'} size={24}/>
                            <span>Unmount animations</span>
                        </li>
                        <li>
                            <FiCheck color={'#3A80D3'} size={24}/>
                            <span>Position transitions</span>
                        </li>
                        <li>
                            <FiCheck color={'#3A80D3'} size={24}/>
                            <span>Accessibility options</span>
                        </li>
                        <li>
                            <FiCheck color={'#3A80D3'} size={24}/>
                            <span>Handoff from Framer</span>
                        </li>
                    </S.FinalConsiderationList>
                
                </S.FinalConsideration> */}

            </S.Content>
        </S.Container>
    )
}

export default Home