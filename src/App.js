import React from "react";
import {Link} from "react-router-dom";
import './App.css';



export default class App extends React.Component{
 


 constructor(props){
  super(props);

  this.state={
    newItem :"",
    list:[]
  }
 }

updateInput(key,value){
  this.setState({
    [key]:value
  });
}

 addItem(){
  const newItem={
    id: 1 + Math.random(),
    value:this.state.newItem.slice()
  };
  const list = [...this.state.list];
  list.push (newItem);

  this.setState({
    list,
    newItem:""
  });
 }
  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id)
    this.setState ({list:updatedList})
    }

 render(){
  return(
    <div className = "title">
      <p className = "mylist">My list</p>
      <div className ="list ">
        <p className ="item">Add an item...</p>
        <br/>
        <input type="text" placeholder ="Type item here..." value={this.state.newItem}
        onChange = {e => this.updateInput("newItem",e.target.value) }/>
        <button className = "add-but" onClick ={()=>this.addItem()}
         disabled = {!this.state.newItem.length}>Add</button>
         <br/>
         <ul>
          {this.state.list.map(item => {
            return(
              <li key = {item.id}>
                {item.value}
                <button className = "delete-but" onClick = {() => 
                 this.deleteItem(item.id)}>
                  X</button>
              </li>
            )
          })} 
         </ul>
      </div>
      
          
            <Link to = "/To_do_list"><button className = "newPage">Next page</button></Link>
         
      
    </div>
  )
 }
}