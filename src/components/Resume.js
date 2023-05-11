import React, { Component } from "react"
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Resume</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>Check out my Resume Below</p>
            <a
              href="https://docs.google.com/document/d/1pToBy5jN57-_v8wbvymgDul8fns6YS5EFql2paG99UA/edit?usp=sharing"
              className="button"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>
            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map(item => {
                    return (
                      <li>
                        <i className={item.devicon} />
                        <em>{item.skillname}</em>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
