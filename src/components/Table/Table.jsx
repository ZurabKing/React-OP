import React from 'react'
import './Table.scss'
import TableSetting from './TableSetting/TableSetting'

export default function Table( {data} ) {
  return (
    <table>
      <thead>
        <tr className='TableTr'>
          <th className='TableTh'>
            <TableSetting />
          </th>
          <th className='TableTh'>Предмет</th>
          <th className='TableTh'>Возраст</th>
          <th className='TableTh'>Опыт работы</th>
        </tr>
      </thead>
      <tbody className='tableTbody'>
        {data.map(item => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.subject}</td>
            <td>{item.age}</td>
            <td>{item.experience}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
