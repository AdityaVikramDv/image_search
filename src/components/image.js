import React from 'react';

const Image = (props)=>{

  return(
    <div className="card" style={{width: '18rem'}}>
        <img src={props.src} className="card-img-top"  alt="Search images"/>
        <div className="card-body">
          <p className="card-text">{props.desc}</p>
        </div>
    </div>
  );
}

export default Image;
