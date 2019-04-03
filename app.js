import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import llama from "./llama.jpg";


class TextDoge extends Component{
	render(){
		return(
			<div>
				<input type="text"  onChange={(event)=>this.props.handleChange(event.target.value)}/>
			</div>
		);
	}
}



function DogeMeme (props){
  return (<div className="doge" >
  		<p>{props.upp}</p>
  		<p>{props.down}</p>
  	</div>); 
  
}



class App extends Component{
	constructor(props){
		super(props);
		this.state={
			upp:"",
			down:""
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleChange2=this.handleChange2.bind(this);
	}
	handleChange(e){
		this.setState({upp: e});
	}
	handleChange2(e){
		this.setState({down: e});
	}
  render(){
    return(
      <div>
      	<TextDoge handleChange={this.handleChange}/>
      	<TextDoge handleChange={this.handleChange2}/>
        <DogeMeme upp={this.state.upp} down={this.state.down}  />
      </div>
    );
  }

}




export default App;
