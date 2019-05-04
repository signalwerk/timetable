import React from "react";
import Lession from "../lession";

import './style.css'

const Lessions = ({ data, teachers, lessions, details }) => {
  let sortLession = lessions.sort((a, b) => {
    let titleA = a.title.toUpperCase(); // ignore upper and lowercase
    let titleB = b.title.toUpperCase(); // ignore upper and lowercase
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });

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
        );
      })}
    </div>
  );
};

export default Lessions;
