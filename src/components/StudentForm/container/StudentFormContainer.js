import { connect } from 'react-redux';
import { push } from 'react-router-redux';

// Views
import StudentFormView from '../presentational/StudentFormView';


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (value) => {
    console.log("Har tryckt på submit"); 
    }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudentFormView);