import React from 'react'
import InputStyled from '../styling/InputStyled'
import ButtonSignStyled from '../styling/ButtonSignStyled'
import FormStyled from '../styling/FormStyled'

export default function LoginForm({handleOnSubmit,handleOnChange, valueEmail, valuePassword}) {
    return (
        <FormStyled onSubmit={handleOnSubmit}>
            <InputStyled name="email" 
                onChange={handleOnChange} 
                value={valueEmail} 
            />
                
            <InputStyled 
                name="password"
                onChange={handleOnChange} 
                value={valuePassword}
            />
            <ButtonSignStyled type="submit">SIGN IN</ButtonSignStyled>
        </FormStyled>
    )
}
