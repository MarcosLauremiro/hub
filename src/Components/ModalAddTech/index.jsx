import { useContext } from 'react'
import { ButtonStyledAll } from '../../styles/ButtonStyled'
import { SelectStyle } from '../../styles/InputStyled'
import { ModalControler } from '../../styles/ModalAddTechStyled'
import { Title2Styled } from '../../styles/TypographyStyled'
import { Imput } from "../Inputs"
import { TechsContext } from '../../providers/techsContext'


export const ModalAdd = ({closeModal}) => {
    
    const {errors, submit, handleSubmit, register, modalRef, buttonRef } = useContext(TechsContext)

    return(
        <ModalControler ref={modalRef}>
            <div className='modal__container'>
                <div className="header__modal">
                    <Title2Styled fontSize='m'>Cadastrar Tecnologia</Title2Styled>
                    <Title2Styled ref={buttonRef} fontSize='m' onClick={(closeModal)}>X</Title2Styled>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <Imput label={'Name'} register={register('title')}></Imput>
                    {errors.title ? <p>{errors.title.message}</p> : null}
                    <label htmlFor="">Selecione status</label>
                    <SelectStyle name="" id="" {...register('status')}>
                        <option value=""></option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </SelectStyle>
                    {errors.status ? <p>{errors.status.message}</p> : null}
                    <ButtonStyledAll buttonSize='g' buttonStyle='primy'>Cadastrar Tecnologia</ButtonStyledAll>
                </form>
            </div>
        </ModalControler>
    )
}