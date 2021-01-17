import styled from 'styled-components'
import colors from "../styling/Colors"


const ListItemStyled = styled.div `
    background-color: ${colors.coral};
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    a {
        color: ${colors.white};           

        &:hover, &:focus {
            color: ${colors.darkCoral};
            transition: .5s;
        }
    }
    
    
`

export default ListItemStyled;