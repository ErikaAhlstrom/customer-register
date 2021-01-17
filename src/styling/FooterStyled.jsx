import styled from 'styled-components'
import colors from "../styling/Colors"

const FooterStyled = styled.footer `
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    font-size: .7rem;
    padding: .5rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    
`

export default FooterStyled;