import * as S from './styles'

const Header = () => {
    return(
        <S.Container>
            <S.Content>
                <h1>Framer motion</h1>

                <div>
                    <p>Framer.com</p>
                    <S.Button>View on Github</S.Button>
                </div>
            </S.Content>
        </S.Container>
    )
}

export default Header