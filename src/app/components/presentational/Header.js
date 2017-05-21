import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component{
		
	render(){
		return(
			<header id="top" className="header">
				<div className="text-vertical-center" >
		            <h1>Start Bootstrap</h1>
		            <h3>Free Bootstrap Themes Templates</h3>
		            <br />
		            <a href="#about" className="btn btn-dark btn-lg">Find Out More</a>
		        </div>
	        </header>
	       		)
	}
		   
}

export default Header;