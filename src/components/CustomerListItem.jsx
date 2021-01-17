import React from 'react'
import {Link} from 'react-router-dom'
import ListItemStyled from '../styling/ListItemStyled'

export default function CustomerListItem({customerData}) {
    return (
        <ListItemStyled>
            <Link to={`customers/${customerData.id}`}>{customerData.name}</Link>
        </ListItemStyled>
    )
}
