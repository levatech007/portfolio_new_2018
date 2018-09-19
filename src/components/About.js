import React, { Component } from "react";
import Content from "../data/content.json";
import Portrait from "../images/portrait.png";

class About extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    this.setState({
      data: Content
    })
  }

  render() {
    return(
      <div className="container">
        <div className="row main-content fade-in">
          { this.state.data.description &&
            <div className="row">
              <div className="col-md-6">
                <p>{ this.state.data.description.title }</p>
                <p>{ this.state.data.description.p1 }</p>
                <p>{ this.state.data.description.p2 }</p>
              </div>
            </div>
          }
          { this.state.data.technologies &&
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                  {
                    this.state.data.technologies.map((item, idx) => {
                      return(
                        <div className="col-sm-2" key={ idx }>
                          <ul>
                          <h4>{ item.title }</h4>
                          {
                            item.content.map((list, idx) => {
                              return(
                                <li key={ idx }>{ list }</li>
                              )
                            })
                          }
                        </ul>
                      </div>


                      )
                    })
                  }
                </div>
            </div>
          </div>
        }
        </div>
        <div className="row main-content">
          <div className="col-md-6">
            <img src={ Portrait } alt="portrait"/>
          </div>
          { this.state.data.about &&
            <div className="col-md-6">
              <h2>{ this.state.data.about.title }</h2>
              <p>{ this.state.data.about.p1 }</p>
              <p>{ this.state.data.about.p2 }</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default About;
