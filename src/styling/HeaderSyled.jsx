import styled from 'styled-components'
import colors from '../styling/Colors'

const HeaderStyled = styled.header `
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    padding: 0 0 0 2rem;
`

export default HeaderStyled;