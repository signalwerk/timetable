import React from "react";
import moment from "moment";
import Anchor from "../anchor";

import './style.css';

const Tableview = ({ data, filter }) => {
  return (
    <div className="tableview">
      <ul>
        {data.map(week => {
          let currentDate = moment(week.id, "[KW]ww-YYYY");
          let KW = (
            <Anchor
              anchor={moment(currentDate)
                .add(1, "days")
                .format("[KW]ww-YYYY")}
            >
              {moment(currentDate)
                .add(1, "days")
                .format("[KW]ww")}
            </Anchor>
          );

          return (
            <React.Fragment key={week.id}>
              {week.FR &&
                week.FR.morning.lession === filter && (
                  <li>
                    {KW}
                    {moment(currentDate)
                      .add(5, "days")
                      .format(" · [Fr] · DD.MM.YYYY")}{" "}
                    · 08:15 – 11:40
                  </li>
                )}

              {week.FR &&
                week.FR.afternoon.lession === filter && (
                  <li>
                    {KW}
                    {moment(currentDate)
                      .add(5, "days")
                      .format(" · [Fr] · DD.MM.YYYY")}{" "}
                    · 13:15 – 16:45
                  </li>
                )}

              {week.SA &&
                week.SA.morning.lession === filter && (
                  <li>
                    {KW}
                    {moment(currentDate)
                      .add(6, "days")
                      .format(" · [Sa] · DD.MM.YYYY")}{" "}
                    · 08:15 – 11:40
                  </li>
                )}

              {week.SA &&
                week.SA.afternoon.lession === filter && (
                  <li>
                    {KW}
                    {moment(currentDate)
                      .add(6, "days")
                      .format(" · [Sa] · DD.MM.YYYY")}{" "}
                    · 13:15 – 16:45
                  </li>
                )}

              {week.week &&
                week.week.lession === filter && (
                  <li>
                    {KW}
                    {moment(currentDate)
                      .add(1, "days")
                      .format(" · [Mo] · DD.MM.YYYY")}
                    {" – "}
                    {moment(currentDate)
                      .add(5, "days")
                      .format("[Fr] · DD.MM.YYYY")}{" "}
                    · 08:15 – 16:45
                  </li>
                )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Tableview;
