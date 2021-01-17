import styled from 'styled-components'
import colors from "../styling/Colors"


const ButtonSignStyled = styled.button `
    background-color: ${colors.coral};
    color: ${colors.white};
    padding: 5px 10px;
    border: 3px solid ${colors.coral};
    border-radius: 5px; 
    cursor: pointer;
    font-weight: 600;

     &:hover, &:focus {
        background-color: ${colors.darkCoral};
        color: ${colors.floralWhite};
        transition: .5s;
        border: 3px solid ${colors.darkCoral};
    }
    
`

export default ButtonSignStyled;