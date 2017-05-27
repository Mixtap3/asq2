import {
	ADD_STUDENT_REQUEST,
	ADD_STUDENT_SUCCESS,
	ADD_STUDENT_FAILURE,
} from './constants';

const initialState = {
	loading: false, 
	error: null, 
	student: null,
};

export const reducer = (state = initialState, action) => {
	switch (action.type){
		case ADD_STUDENT_REQUEST: {
			return Object.assign({}, state, {
				loading:true,
			});
		}
		case ADD_STUDENT_SUCCESS: {
			return Object.assign({}, state, {
				loading:false,
				student:action.student,
				error:null,
			});
		}	
		case ADD_STUDENT_FAILURE: {
			return Object.assign({}, state, {
				loading:false,
				error: action.error,
			});
		}
		default:
			return state; 
	};
}