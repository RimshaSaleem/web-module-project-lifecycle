import axios from 'axios';
import React from 'react'
import Following from './Following'
import './App.css';


class App extends React.Component{
  state = {
    data:{},
    following:[]
  }
  componentDidMount(){
    axios
    .get('https://api.github.com/users/RimshaSaleem')
    .then(res =>{
      console.log('My data',res.data)
      this.setState({data:res.data})
    })
    .catch(err =>{
      console.log("Got an Error",err)
    })
  }
  componentDidUpdate(prevState){
    console.log(prevState)
    console.log(this.state)
    console.log('following',this.state.following)
    if(prevState.data !== this.state.data){
      if(this.state.following.length === 0){ 
        axios
        .get('https://api.github.com/users/RimshaSaleem/following')
        .then(res=>{
          this.setState({following:res.data})
          console.log('MyData',this.state.following)
        })
        .catch(err =>{
          console.log("Got an error",err)
        })
      }
    }
  }

  render(){
    return(
      
        <div class="container">
        <h1 text-align='center'>  Github User Card</h1>
          <h2>{this.state.data.login}</h2>
          <img src = {this.state.data.avatar_url} alt='RimshaSaleem'/>
          <h3>{this.state.data.name}</h3>
          <h3>{this.state.data.location}</h3>
          <h3>{this.state.data.following}</h3>
          <Following following={this.state.following}/>
      </div>
    )
  }
}

export default App;