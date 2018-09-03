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
      <div className="row justify-content-center">
              <form onSubmit={ this.onFormSubmit } className="forms">
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Name:</label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        onChange={this.onNameInputChange}
                      />
                    </div>
                  </div>
                  <br></br>
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Email:</label>
                    <div className="col-sm-8">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                        onChange={this.onEmailInputChange}
                      />
                    </div>
                  </div>
                  <br></br>
                  <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Notes:</label>
                    <div className="col-sm-8">
                      <textarea
                        rows="4"
                        placeholder="Your message here"
                        onChange={this.onNoteInputChange}
                        >
                        </textarea>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-8 offset-md-4">
                    <ReCAPTCHA
                      ref="recaptcha"
                      sitekey="6LcEkV0UAAAAAESH0bsrhEvys2MIK2aE3yhWeHTi"
                      onChange={ this.onChange }/>
                    </div>
                  </div>
                  <div className="row justify-content-center submit-btn">
                    <div className="col-md-8 offset-md-4">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Submit your request"
                      />
                    </div>
                  </div>
                </form>
              </div>
    )
  }
}

export default Contact;
