import styled from 'styled-components'
import colors from "../styling/Colors"


const ListContainerStyled = styled.div `
    background-color: ${colors.white};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
    margin: auto 0;
    align-self: center;
    justify-self: center;
    margin-top: 2rem;
   
    
`

export default ListContainerStyled;