import React,{Component} from 'react';
import Search from './Search';
import axios from 'axios';
import ImageList from './Image_list';
const API_KEY = '26099215-353cddf5c277ddcfb3a61e8a7';


class App extends Component{
  state={ searchResults:[]};

  onSearchClick = async (query)=>{
    const request = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`);
    this.setState({searchResults: request.data.hits});
  }
  render(){
  return (<div className="container">
    <Search callBack={this.onSearchClick}/>
    <ImageList results={this.state.searchResults}/>
    </div>)
  }
};

export default App;
