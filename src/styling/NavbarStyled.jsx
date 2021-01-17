import styled from 'styled-components'
import colors from "../styling/Colors"


const NavbarStyled = styled.nav `
    display: flex;
    cursor: pointer;
    width: 50%;

    a {
        color: ${colors.white};           
        padding-left: 2rem;

        &:hover, &:focus {
            color: ${colors.coral};
            transition: .5s;
        }
    }
    
`

export default NavbarStyled;