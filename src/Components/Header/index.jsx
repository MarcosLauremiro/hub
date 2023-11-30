import { ButtonStyledAll } from '../../styles/ButtonStyled'
import { HeaderStyled } from '../../styles/HeaderStyled'
import { Title1Styled } from '../../styles/TypographyStyled'

export const Header = ({buttonText , click}) => {
    return (
        <HeaderStyled>
            <div className='header__container'>
                <div>
                    <Title1Styled color='pink' fontSize='g'>Kenzie Hub</Title1Styled>
                </div>
                <div>
                    <ButtonStyledAll onClick={click} buttonSize='g' buttonStyle='grey'>{buttonText}</ButtonStyledAll>
                </div>
            </div>
        </HeaderStyled>
    )

}