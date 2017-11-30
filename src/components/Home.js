import React, { Component } from 'react';

import AppIcon from './seriousOS/AppIcon';

import './desktop.css';

import iconFiles from './assets/icon_files.png';
import iconMail from './assets/icon_mail.png';
import iconChat from './assets/icon_chat.png';
import iconWeb from './assets/icon_web.png';
import iconPhotos from './assets/icon_photos.png';
import iconTrash from './assets/icon_trash.png';

class Home extends Component {
  render () {
    return (
      <div id="menu_bar">
        <div id="menu_bar_logo"></div>
        <AppIcon name="Files" imgSrc={iconFiles} />
        <AppIcon name="Mail" imgSrc={iconMail} />
        <AppIcon name="Chat" imgSrc={iconChat} />
        <AppIcon name="Web" imgSrc={iconWeb} />
        <AppIcon name="Photos" imgSrc={iconPhotos} />
        <AppIcon name="Trash" imgSrc={iconTrash} />
      </div>
    );
  }
}

export default Home;
