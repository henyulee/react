import React from 'react';
import CreateReactClass from 'create-react-class';

let SMtable = CreateReactClass({
	render(){
		return (
			<table>
				<SMthead />
				<SMtbody tbody = { this.props.myData }/>
			</table>
		);
	}
});

let SMthead = CreateReactClass({
	render(){
		return (
			<thead>
				<tr>
					<th>id</th>
					<th>是否公开</th>
					<th>创建时间</th>
					<th>评论数</th>
					<th>用户姓名</th>
					<th>描述</th>
				</tr>
			</thead>
		);
	}
});

let SMtbody = CreateReactClass({
	render(){
		let data = this.props.tbody;
		let tbody = data.map(function(item,key){
			return (
				<tr key={ key }>
					<td>{ item.owner.id }</td>
					<td>{ item.public? "是" : "否" }</td>
					<td>{ item.created_at.substr(0,10) }</td>
					<td>{ item.comments }</td>
					<td>{ item.user }</td>
					<td>{ item.description }</td>
				</tr>
			);
		});

		return (
			<tbody>
				{ tbody }
			</tbody>
		);
	}
});

export default SMtable;