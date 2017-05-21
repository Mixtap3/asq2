import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component{

	render(){
		return(
		    <footer>
		        <div className="container">
		            <div className="row">
		                <div className="col-lg-10 col-lg-offset-1 text-center">
		                    <h4><strong>Start Bootstrap</strong>
		                    </h4>
		                    <p>3481 Melrose Place
		                        <br />Beverly Hills, CA 90210</p>
		                    <ul className="list-unstyled">
		                        <li><i className="fa fa-phone fa-fw"></i> (123) 456-7890</li>
		                        <li><i className="fa fa-envelope-o fa-fw"></i> <a href="mailto:name@example.com">name@example.com</a>
		                        </li>
		                    </ul>
		                    <br />
		                    <ul className="list-inline">
		                        <li>
		                            <a href="#"><i className="fa fa-facebook fa-fw fa-3x"></i></a>
		                        </li>
		                        <li>
		                            <a href="#"><i className="fa fa-twitter fa-fw fa-3x"></i></a>
		                        </li>
		                        <li>
		                            <a href="#"><i className="fa fa-dribbble fa-fw fa-3x"></i></a>
		                        </li>
		                    </ul>
		                    <hr className="small" />
		                    <p className="text-muted">Copyright &copy; Your Website 2014</p>
		                </div>
		            </div>
		        </div>
		        <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-chevron-up fa-fw fa-1x"></i></a>
		    </footer>
		    )
	}
}

export default Footer;