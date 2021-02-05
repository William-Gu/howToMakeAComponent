import React, { useState } from 'react';
import Feat from "./feature";

function Item(props) {
  const [isFavourite, setIsFavourite] = useState(!props.data["_hasFav"])
  
  function handleClick(e){
    if(e.target.classList.contains("nav-feat-btn")){   
      if(e.target.dataset["favourite"]){
        props.onFavourite(props.data)
      }else if(e.target.dataset["delete"]){
        props.onDelete(props.data)
      }
    }
  }

  return (
    <div className="nav-list-item" onClick={handleClick}>
      <span>{props.data.title}</span>
      <Feat isFavourite={isFavourite}></Feat>
    </div>
  );
}

export default Item;
