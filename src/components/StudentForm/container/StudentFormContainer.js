import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// Views
import StudentFormView from '../presentational/StudentFormView';
//Actions
import {addStudent} from '../modules/actions';

const mapStateToProps = state => ({
  showForm: !state.student.student,
  error: state.student.error,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (value) => {
    console.log("Har tryckt på submit");
    console.log(value);
    dispatch(addStudent(value)); 
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudentFormView);