import { ButtonStyledAll } from '../../styles/ButtonStyled'
import { HeaderDashStyled, NavStyled } from '../../styles/DashStyled'
import { SectionStyled } from '../../styles/DashStyled'
import { ParagraphStyled, Title1Styled, Title3Styled } from '../../styles/TypographyStyled'
import { UserContext } from '../../providers/userContext'
import { Techs } from '../../Components/Techs'
import { useContext } from 'react'
import { TechsProvider } from '../../providers/techsContext'


export const Dash = () => {

    const { logout, userData } = useContext(UserContext)

    return(
        <>
            <NavStyled>
                <Title1Styled color='pink' fontSize='g'>Kenzie Hub</Title1Styled>
                <ButtonStyledAll onClick={() => {logout()}} buttonSize='g' buttonStyle='grey'>Sair</ButtonStyledAll>
            </NavStyled>
            <HeaderDashStyled>
                <Title3Styled fontSize='m'>Olá {userData.name}</Title3Styled>
                <ParagraphStyled color='grey' fontSize='m'>{userData.course_module}</ParagraphStyled>
            </HeaderDashStyled>
            <main>
                <SectionStyled>
                    <TechsProvider>
                        <Techs/>
                    </TechsProvider>
                </SectionStyled>
            </main>
        </>
    )
}