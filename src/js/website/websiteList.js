import React from 'react';
import CreateReactClass from 'create-react-class';
import '../../css/common.css';

let WebName = CreateReactClass({
	render:function(){
		return (
			<h3 className="">{this.props.name}</h3>
		);
	}
});

let WebLink = CreateReactClass({
	render:function(){
		return (
			<a className="link" href={this.props.link}>
				( {this.props.link} )
			</a>
		);
	}
});

let Website = CreateReactClass({
	getDefaultProps:function(){//设置默认props值
		return {
			name:"嗖唛商城",
			link:"www.soumate.cn"
		};
	},
	render:function(){
		return (
			<li>
				<WebName name={ this.props.name } />
				<WebLink link={ this.props.link } />
			</li>
		);
	}
});

let WebsiteSet = CreateReactClass({
	propTypes:function(){
		title:React.PropTypes.string.isRequired
	},
	render:function(){
		let weblistInfo = this.props.data;
		let websiteList = weblistInfo.map(function(item,keys){
			return <Website name={ item.name } link={ item.url } key={keys}/>;
		});
		return (
			<ul>
				<h1>{ this.props.title }</h1>
				{ websiteList }
			</ul>
		);
	}
});

export default WebsiteSet;