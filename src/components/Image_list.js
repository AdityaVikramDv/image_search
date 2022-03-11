import React from 'react';
import Image from './image';
const ImageList = (props) =>{

  function renderImages(){
    if(props){
      return props.results.map((img)=>{
        return <li style={{listStyleType:'none'}} key={img.id}><Image src={img.webformatURL} desc={img.tags}/></li>;
      });
    }

  }

  return(
  <ul className="list-group">
      {renderImages()}
  </ul>
  );
}

export default ImageList;
