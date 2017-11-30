import React from 'react';

const AppIcon = (props) => (
  <div className="app_portal">
    <div className="app_icon_bg"><img className="app_icon" alt="icon" src={props.imgSrc} /></div>
    <div className="menu_app_name">{props.name}</div>
  </div>
)

export default AppIcon;
