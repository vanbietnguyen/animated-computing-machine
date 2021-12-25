import React from "react";
import { useNavigate, useMatch } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {

  let navigate = useNavigate();
  let match = useMatch('')
  console.log(match, 'match')

  return (
    // come back here. you don't need match.url because they automatically build on parents path now
    // https://reactrouter.com/docs/en/v6/upgrading/v5#relative-routes-and-links
    // not sure if match.pathname is necessary. we'll test later
    <div className={`${size} menu-item`} onClick={() => navigate(`${match.pathname}${linkUrl}`)} >
      
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
  )
  
};

export default MenuItem;