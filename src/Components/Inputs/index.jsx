import { InputStyled } from '../../styles/InputStyled'

export const Imput = ({label, type, id, register, placeholder}) => {
    return (
        <fieldset>
            {label ? <label>{label}</label> : null}
            <InputStyled type={type} id={id} {...register} placeholder={placeholder}/>
        </fieldset>
    )
}