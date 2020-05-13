import React, { Fragment } from 'react'
import Lession, { LessionLine } from '../lession'
import { TotalLessions } from '../lession/totalLessions'

import './style.css'

const Lessions = ({ data, teachers, lessions, details }) => {
  let sortLession = lessions.sort((a, b) => {
    let titleA = a.title.toUpperCase() // ignore upper and lowercase
    let titleB = b.title.toUpperCase() // ignore upper and lowercase
    if (titleA < titleB) return -1
    if (titleA > titleB) return 1
    return 0
  })

  let total = sortLession.reduce((sum, lession) => {
    let newSum = sum
    newSum += TotalLessions(data, lession.id)
    return newSum
  }, 0)

  return (
    <div className="lessions">
      {sortLession.map(lession => {
        return (
          <Lession
            key={lession.id}
            data={data}
            teachers={teachers}
            lession={lession}
            details={details}
          />
        )
      })}
      {!details && (
        <Fragment>
          <br />
          <LessionLine total={total} color="transparent">
            <span className="bold">Total</span>
          </LessionLine>
        </Fragment>
      )}
    </div>
  )
}

export default Lessions
