import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import StartPage from './StartPage';

class App extends React.Component {

	render(){
		return(
			<BrowserRouter>
      			<Route path={"/"} component={StartPage} />
  			</BrowserRouter>
		)
	}
}

render(<App />, window.document.getElementById('app'))
