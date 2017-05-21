import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Header from './Header'
import Footer from './Footer'

class Layout1 extends Component {

	render(){
		return(
			<div>
				<Header />
				<Footer />
	    	</div>
		)
	}
}

export default Layout1;
