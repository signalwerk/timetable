import React, { Fragment } from 'react'
import Tableview from '../tableview'
import Anchor from '../anchor'
import { TotalLessions } from './totalLessions'

import './style.css'

// https://stackoverflow.com/questions/5366849/convert-1-to-0001-in-javascript
function padLeft(nr, n, str) {
  return Array(n - String(nr).length + 1).join(str || '0') + nr
}

export const LessionLine = ({ id, color, total, children }) => {
  return (
    <div id={id} className="lession">
      <span className={`lession-bg lession-bg--${color || 'gray'}`} />
      <span>{padLeft(total, 3, ' ')} Lektionen&nbsp;&nbsp;·&nbsp;&nbsp;</span>
      {children}
    </div>
  )
}

const Lession = ({ data, teachers, lession, details }) => {
  let total = TotalLessions(data, lession.id)

  if (total === 0) {
    return null
  }

  return (
    <LessionLine
      id={details && `detail-${lession.id}`}
      color={lession.color}
      total={total}
    >
      <Anchor prefix={'detail-'} anchor={lession.id}>
        <span className="bold">{lession.title} </span>
      </Anchor>
      {details && <Tableview data={data} filter={lession.id} />}
    </LessionLine>
  )
}

export default Lession
