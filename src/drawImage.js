import React from 'react';


const DrawImage =(props) =>{

    console.log(props.searchImage[0].link)
  return(
      <div className="list">
      <div className="image">
          <img src = {props.searchImage[0].link} alt="N/A"></img>
          <img src = {props.searchImage[1].link} alt="N/A"></img>
          <img src = {props.searchImage[2].link} alt="N/A"></img>
          <img src = {props.searchImage[3].link} alt="N/A"></img>
          <img src = {props.searchImage[4].link} alt="N/A"></img>
          <img src = {props.searchImage[5].link} alt="N/A"></img>
      </div></div>
  )
}

export default DrawImage