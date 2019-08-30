import React from "react";
import Semester from '../semester'

import './style.css';
import './normalize.css';
import './font.css';

export const Timetable = ({ semester, data, teachers, lessions, generation }) => {
  return (
    <Semester
      semester={semester}
      data={data}
      teachers={teachers}
      lessions={lessions}
      generation={generation || 2017}
    />
  )
}

export default Timetable
