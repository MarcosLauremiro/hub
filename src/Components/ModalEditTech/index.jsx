import { useContext } from 'react'
import { ButtonStyledAll } from '../../styles/ButtonStyled'
import { SelectStyle } from '../../styles/InputStyled'
import { ModalControler } from '../../styles/ModalAddTechStyled'
import { Title2Styled } from '../../styles/TypographyStyled'
import { Imput } from '../Inputs'
import { useForm } from 'react-hook-form'
import { TechsContext } from '../../providers/techsContext'
import { formRegister } from '../../Pages/Register/validForms'
import { zodResolver } from '@hookform/resolvers/zod'
import { formEdit } from './validFrom'

export const ModalEdit = ({closeModalEdit}) => {

    const {editTech, cardTech, deletTech} = useContext(TechsContext)

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formEdit)
    })
    
    const submit = (formData) => {
        editTech(formData, cardTech.id)
    }

    return (
        <ModalControler>
            <div className='modal__container'>
                <div className="header__modal">
                    <Title2Styled fontSize='m'>Tecnologia Detalhes</Title2Styled>
                    <Title2Styled onClick={closeModalEdit} fontSize='m' >X</Title2Styled>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <Imput label={'Nome'} placeholder={cardTech.title}/>
                    <label htmlFor="">Selecione status</label>
                    <SelectStyle {...register('status')} id="">
                            <option value="">status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                    </SelectStyle>
                    {errors.status ? <p>{errors.status.message}</p> : null}
                    <div className='buttons_edit'>
                        <ButtonStyledAll type='submit' buttonSize='g' buttonStyle='deful'>Salvar alteração</ButtonStyledAll>
                        <ButtonStyledAll onClick={() => deletTech(cardTech.id)} type='button' buttonSize='g' buttonStyle='grey'>Excluir</ButtonStyledAll>
                    </div>
                </form>
            </div>
        </ModalControler>
    )
}