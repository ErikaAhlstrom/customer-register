import styled from 'styled-components'
import colors from "./Colors"

const FormStyled = styled.form `
    background-color: ${colors.darkBlue};
    display: flex;
    flex-direction: column;
    width: 70%;  
    max-width: 620px;     
`

export default FormStyled;