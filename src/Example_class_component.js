import React from 'react';

class ExampleClassComponent extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			name: "Ram Ram"
		}
	}

	render(){
		return (<h1>{this.state.name} {this.props.annocemet}</h1>)
	}
}

export default ExampleClassComponent