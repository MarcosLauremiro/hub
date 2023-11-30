import { SelectStyle } from '../../styles/InputStyled'
import { Option } from './Option'

export const Select = ({label, id, register}) => {
    return (
        <fieldset>
            {label ? <label>{label}</label> : null}
            <SelectStyle id={id} {...register} required>
                <option value=''>Selecione o Módulo</option>
                <Option value={'Primeiro módulo (Introdução ao Frontend)'} text={'Primeiro Módulo'}/>
                <Option value={'Segundo módulo (Frontend Avançado)'} text={'Segundo Módulo'}/>
                <Option value={'Terceiro módulo (Introdução ao Backend)'} text={'Terceiro Módulo'}/>
                <Option value={'Quarto módulo (Backend Avançado)'} text={'Quarto Módulo'}/>
            </SelectStyle>
        </fieldset>
    )
}