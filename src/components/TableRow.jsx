import React from 'react'

export const TableRow = ({ title, duration, rating, genre, awards }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{duration}</td>
            <td>{rating}</td>
            <td>
                <ul>
                    {
                        genre.map((g) => {
                         return <li key={g}>{g}</li>
                        })
                    }
                </ul>
            </td>
            <td>{awards}</td>
        </tr>
    )
}
