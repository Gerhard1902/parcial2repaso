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





componentDidMount(){
	fetch("https://still-garden-88285.herokuapp.com/draft_tweets")
		.then(response=> response.json())
		.then(
			(result)=>{
				console.log(result);
				this.setState({
					isLoaded:true,
					tweets:result.draft_tweets
				})
			},
			(error)=>{
				this.setState({
					isLoaded:true,
					error:error
				})
			}
		)
}







handleClick =(e, childRef)=>{
 	console.log(e,childRef);
 	childRef.current.focus();
 	const post2={	 	};
 fetch("https://still-garden-88285.herokuapp.com/draft_tweets",
    	{method:"POST", 
    	body: JSON.stringify({
    		avatar:"https://www.nationalgeographic.com.es/medio/2017/07/20/perros2_56d11542_1330x2000.JPG",
 			user_name: "perro",
 			description: childRef.current.value
 		}), 
 		headers:{'Content-Type': 'application/json'}})
    .then(res => res.json())
	.then((response) => //{
	{
	 this.setState({
					isLoaded:true,
					tweets:[...this.state.tweets,{avatar:"https://www.nationalgeographic.com.es/medio/2017/07/20/perros2_56d11542_1330x2000.JPG",
      user_name: "perro",
      description: childRef.current.value}]
				})
  

	})
.catch(error => console.error('Error:', error));
childRef.current.value="";
}









export default App;




todo
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import llama from "./llama.jpg";

class Bar extends Component{ // function sintax
  render(){
  return(
        <div>
          <img className="llama" src={llama} />
        </div> 
  );
  }
}





class InputTweet extends Component{ // function sintax
  constructor(props){
    super(props);
    this.myRef= React.createRef();
    this.state={
      text:"ok",
      };
  }

   handleChange =(e)=>{
   	this.setState({text: e.target.value}) 
}


handleClick=(e)=>{
	
	this.props.handleClick(e, this.myRef);
}

  render(){
  return(
        <div>
          <input className="text"type="text" ref={this.myRef} placeholder="What´s happening?" onChange={(e)=>this.handleChange(e)} value={this.state.text}  />
          <button className="myButton"onClick={(e)=>this.handleClick(e)}>Tweet</button>
        </div> 
  );
  }
}






function Feed(props){
	return(
		props.tweets.map((step, index) => {
        return (
          <Tweets 
                className="actualTweet"
                image={step.avatar}
                name={step.user_name} 
                date={step.created_at}
                message={step.description} 
              />
        )
       })

	);
}







function Tweets (props){ // function sintax
  return(
    <div className="tweet2">
      
      <div className="row">
      	<img className="llama" src={props.image} />
        <div>
	        <div>{props.name}</div>
	        
	        <div>{props.message}</div> 
        </div>

      </div>
       <div className="date">{props.date}</div>
     
      
    </div>
  );
}





class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tweets: [],
      error:null,
      isLoaded:false,
      };
      this.myRef= React.createRef();
  }

  componentDidMount(){
	fetch("https://still-garden-88285.herokuapp.com/draft_tweets")
		.then(response=> response.json())
		.then(
			(result)=>{
				console.log(result);
				this.setState({
					isLoaded:true,
					tweets:result.draft_tweets
				})
			},
			(error)=>{
				this.setState({
					isLoaded:true,
					error:error
				})
			}
		)
}



handleClick =(e, childRef)=>{
 	console.log(e,childRef);
 	childRef.current.focus();
 	const post2={
 		
 	};
  
    fetch("https://still-garden-88285.herokuapp.com/draft_tweets",
    	{method:"POST", 
    	body: JSON.stringify({
    		avatar:"https://www.nationalgeographic.com.es/medio/2017/07/20/perros2_56d11542_1330x2000.JPG",
 			user_name: "perro",
 			description: childRef.current.value
 		}), 
 		headers:{'Content-Type': 'application/json'}})
    .then(res => res.json())
	.then((response) => //{
	{
	 this.setState({
					isLoaded:true,
					tweets:[...this.state.tweets,{avatar:"https://www.nationalgeographic.com.es/medio/2017/07/20/perros2_56d11542_1330x2000.JPG",
      user_name: "perro",
      description: childRef.current.value}]
				})
  

	})
.catch(error => console.error('Error:', error));
childRef.current.value="";
    
    
}


 handleChange =()=>{
   this.myRef.current.focus();
}


    render(){
     const {error, isLoaded, tweets}=this.state;
     let content;
     if(error){
      		content=<div>Error:{error.message}</div>;
      	} else {
      return(
      	content=(
      	<Fragment >
          <div >
          <div>
            <div className="tweet">
            <Bar />
              <div className="upperBar">
                	<InputTweet handleClick={this.handleClick}/>
              </div>
            </div>

          </div>

            <div className="actualTweet" isLoaded={this.state.isLoaded /*hacer variable const al principio y utilizar variables*/}>
             	<Feed tweets={tweets}  />
            </div>
          </div>
         </Fragment>
         )
      );
    }
    return (
      <div className="App">
        { content }
      </div>
	)
	}
}





export default App;
