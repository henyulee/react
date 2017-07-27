import React from 'react';
import CreateReactClass from 'create-react-class';
import $ from 'jquery';
import SMtable from './table';

let Ajax = CreateReactClass({
	getInitialState(){
		return {
			data:[]
		}
	},

	componentDidMount: function() {
	    this.serverRequest = $.get(this.props.url,function (result) {
	      this.setState({
	        data:result
	      });
	      console.log(this.state.data)
	    }.bind(this));
	},
	 
	componentWillUnmount: function() {
	    this.serverRequest.abort();
	},

	render(){
		return (
			<SMtable myData={ this.state.data } />
		);
	}
});

export default Ajax;