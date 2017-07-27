import React from 'react';
import CreateReactClass from 'create-react-class';
import logo from './logo.svg';
import './App.css';
import './css/common.css';

import WebsiteSet from './js/website/websiteList';
import FadeInOut from './js/animation/fade-in-out';
import Ajax from './js/component/ajax';
import WebsiteInfo from './data/website.json';


let App = CreateReactClass({
	getInitialState() {
		return {
			flag:false,
			clickMount:0
		};
	},
	switchShowOrNot(e){
		let app = document.querySelector("#website");
		if(this.state.flag){
			app.classList.add("none");
		}else{
			app.classList.remove("none");
		}
		this.setState({
			flag:! this.state.flag,
			clickMount:this.state.clickMount +1
		});
	},
	render() {
		var btnTxt = this.state.flag ? "点击收起" :"点击加载更多资源介绍……";
	    return (
	      <div className="App">
	        <div className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h2>Welcome to React</h2>
	        </div>
	        <Ajax url='https://api.github.com/users/octocat/gists' />
	        <p className="App-intro">
	          To get started, edit <code>src/App.js</code> and save to reload。<br/>
	          <span className="btn btn-info" onClick={ this.switchShowOrNot }>
	          	{ btnTxt } 
	          </span>
	          点击次数为：{ this.state.clickMount }
	        </p>
	        <div id="website" className="list inset none">
	        	<WebsiteSet data={ WebsiteInfo } title = '--**网站资源列表**--' />
	        </div>
	        
			{/*<FadeInOut />*/}

	      </div>
	    );
	}
});

export default App;
