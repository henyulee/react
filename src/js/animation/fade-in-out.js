import React from 'react';
import CreateReactClass from 'create-react-class';

let FadeInOut = CreateReactClass({
	getInitialState(){
		return {
			opacity:1
		};
	},
	componentDidMount:function(){
		this.timer = setInterval(function(){
			let opacity = this.state.opacity;
			opacity -= 0.1;
			if(opacity <= 0.1){
				opacity = 1;
			}
			this.setState({
				opacity:opacity
			});

		}.bind(this),1000);
	},
	render(){
		return (
			<div className="fade-in-out" style={{ opacity:this.state.opacity }}>faf</div>
		);
	}
});

export default FadeInOut;