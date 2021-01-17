import styled from 'styled-components'
import colors from "../styling/Colors"

const InputStyled = styled.input `
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    padding: 5px 10px;
    border: 3px solid ${colors.coral};
    border-radius: 5px; 
    margin-bottom: 1rem;
    
`

export default InputStyled;