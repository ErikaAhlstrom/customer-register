import styled from 'styled-components'
import colors from "../styling/Colors"


const TableStyled = styled.table `
    background-color: ${colors.coral};
    color: ${colors.white};
    display: flex;
    width: 80%;
    max-width: 600px;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 2rem;
    td {
        padding: 0 .7rem;
    }    
`

export default TableStyled;