import { useContext, useState } from 'react'
import { TechsCardStyled } from '../../../styles/DashStyled'
import { ParagraphStyled } from '../../../styles/TypographyStyled'
import { TechsContext } from '../../../providers/techsContext'


export const CardTechs = ({tech}) => {

    const {openModalEdit} = useContext(TechsContext)

    return(
        <TechsCardStyled onClick={() => openModalEdit(tech)}>
            <ParagraphStyled>{tech.title}</ParagraphStyled>
            <ParagraphStyled fontSize='p' color='grey' >{tech.status}</ParagraphStyled>
        </TechsCardStyled>
    )
}