import React from 'react'
import { dateParser } from '../utils/functions';

const Event = ({event, num}) => {
    return(
        <tr>
            <td>{num+1}</td>
            <td>{event.intitule}</td>
            <td>{event.description}</td>
            <td>{dateParser(event.date_debut)}</td>
            <td>{dateParser(event.date_fin)}</td>
        </tr>
    )
}

export default Event;