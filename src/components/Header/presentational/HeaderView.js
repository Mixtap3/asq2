import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StudentFormContainer} from '../../StudentForm';

class HeaderView extends Component{
		
	render(){
		return(
			<header id="top" className="header">
				<div className="text-vertical-center" >
		            <h1>Start Bootstrap</h1>
		            <h3>Free Bootstrap Themes Templates</h3>
		            <br />
		            <StudentFormContainer/>
		        </div>
	        </header>
	       		)
	}
		   
}

export default HeaderView;