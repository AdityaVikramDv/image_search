import React,{Component} from 'react';

class Search extends Component{
 state={query:''};

 onEnter = (event)=>{
   event.preventDefault();
   this.props.callBack(this.state.query);
 }
 render(){
   return(<div className="m-3 row">
     <form onSubmit={this.onEnter}>
       <input className="form-control"
       value={this.state.query}
       placeholder="Search For Images"
       onChange={(event)=>{
        this.setState({query: event.target.value});
       }}
       />
     </form>
     </div>)
 }

}


export default Search;
