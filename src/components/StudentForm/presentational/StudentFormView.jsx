import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import {ButtonView as Button} from '../../Button';


const StudentFormView = ({ showForm, error, handleSubmit, pristine, submitting }) => {

const errorMessage = (
  <div className="errorMessage">
    <h4>Ooops, something went wrong... </h4>
    <p> { error } </p>
  </div>
);

const successMessage = (
  <div className="successMessage">
    <h3>Thank you!</h3>
  </div>
);

const message = () => (
  error ? errorMessage : successMessage
);

return (
  <div>
    {
      showForm ? (
        <form onSubmit={handleSubmit} className="form studentForm">
          <div className="form-group">
            <label htmlFor="first_name">
              First name
            </label>
            <div>
              <Field
                name="first_name"
                component="input"
                type="text"
                placeholder="first name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="last_name">
              Last name
            </label>
            <div>
              <Field
                name="last_name"
                component="input"
                type="text"
                placeholder="last name"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>
            <div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="your email"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Program">
              What do you study? 
            </label>
            <div>
              <Field
                name="program"
                component="input"
                type="text"
                placeholder="Program"
              />
            </div>
          </div>  
          <div className="form-group">
            <Button
              type="submit"
              disabled={pristine || submitting}
              styleType={'btn-login'}
              label="submit"
            />
          </div>
        </form>
      ) : message()
    }
  </div>
)};


StudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

StudentFormView.defaultProps = {
};

export default
  reduxForm({
    form: 'student', // a unique identifier for this form
  })(StudentFormView);
