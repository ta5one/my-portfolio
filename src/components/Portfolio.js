import React, { Component } from "react"
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={`#modal-${index}`}>
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        id={`modal-${index}`}
                        className="popup-modal mfp-hide"
                      >
                        <div className="description-box">
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                          <span className="categories">
                            <i className="fa fa-tag" />
                            {item.categories}
                          </span>
                        </div>
                        <div className="link-box">
                          <a
                            href={item.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View on GitHub
                          </a>
                          <a href="#" className="popup-modal-dismiss">
                            Close
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
