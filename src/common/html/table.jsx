import React from 'react'

export const Table = props => <div className="table-responsive-sm"><table className="table table-hover table-sm">{props.children}</table></div>
export const Thead = props => (<thead>{props.children}</thead>)
export const Tbody = props => (<tbody>{props.children}</tbody>)
export const Tr = props => (<tr>{props.children}</tr>)
export const Td = props => (<td>{props.children}</td>)
export const Th = props => (<th scope="col">{props.children}</th>)
