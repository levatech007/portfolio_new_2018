import React, { Component } from "react";
import ReCAPTCHA from "react-google-recaptcha";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      message: {
        name: "",
        email: "",
        note: "",
      },
      recaptchaResponse: "",
      alerts: false,
      submitted: false,
    }
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onNoteInputChange = this.onNoteInputChange.bind(this);
    this.onFormSubmit= this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onNameInputChange(e) {
    this.setState({
      message: {
        name: e.target.value,
        email: this.state.email,
        note: this.state.note,
      }
    })
  }

  onEmailInputChange(e) {
    this.setState({
      message: {
        name: this.state.name,
        email: e.target.value,
        note: this.state.note,
      }
    })
  }

  onNoteInputChange(e) {
    this.setState({
      message: {
        name: this.state.name,
        email: this.state.email,
        note: e.target.value,
      }
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.recaptchaResponse) {
      let message = this.state.message
      console.log(message)
      this.setState({
        message: {
          name: "",
          email: "",
          note: "",
        },
        recaptchaResponse: "",
        alerts: true,
        submitted: true,
      })
    } else {
      this.setState({
        message: {
          name: "",
          email: "",
          note: "",
        },
        recaptchaResponse: "",
        alerts: true,
        submitted: false,
      })
    }
  }

  onChange(response) {
    this.setState({
    recaptchaResponse: response
  });
}

  render() {
    return(
      <div className="row justify-content-center main-content">
        <div className="col-md-6">
          <form onSubmit={ this.onFormSubmit } className="forms">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name:</label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  onChange={this.onNameInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email:</label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  onChange={this.onEmailInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Notes:</label>
              <div className="col-sm-8">
                <textarea
                  rows="4"
                  className="form-control"
                  placeholder="Your message here"
                  onChange={this.onNoteInputChange}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <ReCAPTCHA
                ref="recaptcha"
                sitekey="6LcEkV0UAAAAAESH0bsrhEvys2MIK2aE3yhWeHTi"
                onChange={ this.onChange }
              />
            </div>
            <div className="row justify-content-center">
              <input
                type="submit"
                className="btn btn-dark submit-btn"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
