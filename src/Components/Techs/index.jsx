import { useContext, useEffect, useState } from 'react'
import { ButtonStyledAll } from '../../styles/ButtonStyled'
import { ContentTechsStyled, HeaderTechsStyled } from '../../styles/DashStyled'
import { Title2Styled } from '../../styles/TypographyStyled'
import { CardTechs } from './CardTech'
import { ModalAdd } from '../ModalAddTech'
import { UserContext } from '../../providers/userContext'
import { ModalEdit } from '../ModalEditTech'
import { TechsContext } from '../../providers/techsContext'

export const Techs = () => {

    const {userData} = useContext(UserContext)
    const {stateModal, openModal, closeModal, modalEdit, closeModalEdit, listTechs} = useContext(TechsContext)

    return(
        <> {
            userData ? (
        <>
        <HeaderTechsStyled>
            <Title2Styled fontSize='m' >Tecnologias</Title2Styled>
            <ButtonStyledAll buttonSize='m' buttonStyle='grey' onClick={openModal} >+</ButtonStyledAll>
        </HeaderTechsStyled>
        <ContentTechsStyled>
            {listTechs.map((tech) => {
                return <CardTechs key={tech.id} tech={tech}/>
            })}
        </ContentTechsStyled>
        {stateModal ? <ModalAdd closeModal={closeModal}></ModalAdd> : null}
        {modalEdit ? <ModalEdit closeModalEdit={closeModalEdit} ></ModalEdit>: null}
        </>
            ) : (<p>carregando....</p>)
        }
        </>
    )       
}