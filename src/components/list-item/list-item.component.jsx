import React from 'react';
import './list-item.styles.scss';
import { ReactComponent as InfoIcon } from '../../assets/info.svg'

export default function listItem({ name, invoice, date, price, number }) {
  return (
    <tr className="list-item">
      <td> { number } </td>
      <td> { name } </td>
      <td> { invoice } </td>
      <td> { date } </td>
      <td> <b> { price } </b> </td>
      <td> <InfoIcon className="list-item__icon" />  </td>
    </tr>
  )
}
