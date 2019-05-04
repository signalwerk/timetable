import React from "react";
import Weeks from "../weeks";
import Lessions from "../lessions";
import moment from "moment";
import Link from "gatsby-link";

import './style.css';

class Semester extends React.Component {
  state = { defaultLink: false };

  componentDidMount() {
    let currentAnchor = moment().format("[KW]ww-YYYY");
    if (document.getElementById(currentAnchor)) {
      this.setState({ defaultLink: currentAnchor });
    }
  }

  render() {
    let { semester, data, teachers, lessions } = this.props;

    return (
      <div className="semester">
        <h1>{semester.title}</h1>
        <h3>{semester.room}</h3>
        {semester.notes && <h3>{semester.notes}</h3>}
        <p>Klasse {semester.class} · Änderungen vorbehalten.</p>

        <div className="navigation noPrint">
          <ul>
            {semester.links.map(link => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  activeClassName="active"
                  className={`navigation ${link.class ? link.class : ""}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {this.state &&
          this.state.defaultLink && (
            <a href={`#${this.state.defaultLink}`}>↓ aktuell</a>
          )}

        <Lessions data={data} teachers={teachers} lessions={lessions} />

        <Weeks data={data} teachers={teachers} lessions={lessions} />

        <div className="pagebreak" />

        <Lessions
          data={data}
          teachers={teachers}
          lessions={lessions}
          details={true}
        />

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="noPrint">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div>
            <a
              href="https://github.com/logrinto/IAD2017.timetable"
              rel="noopener noreferrer"
              target="_blank"
            >
              → Stundenplan auf Github
            </a>{" "}
            <a
              href="webcal://logrinto.github.io/IAD2017.timetable/IAD.ics"
              rel="noopener noreferrer"
              target="_blank"
            >
              → Stundenplan abonnieren
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Semester;
