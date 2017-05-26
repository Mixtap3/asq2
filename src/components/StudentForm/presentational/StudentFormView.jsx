import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import {ButtonView as Button} from '../../Button';


const StudentFormView = ({ handleSubmit, pristine, submitting }) => (

  <form onSubmit={handleSubmit} className="form">
    <div>
      <label htmlFor="email">
        email
      </label>
      <div>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder=""
        />
      </div>
    </div>

    <div>
      <label htmlFor="password">
        lösenord
      </label>
      <div>
        <Field
          name="password"
          component="input"
          type="password"
          placeholder=""
        />
      </div>
    </div>

    <div>
      <Button
        type="submit"
        disabled={pristine || submitting}
        styleType={'btn-login'}
        label="submit"
      />
    </div>
  </form>
);


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
