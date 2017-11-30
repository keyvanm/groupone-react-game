import React, { Component } from 'react';

import './desktop.css';

import iconFile from './assets/icon_file.png';
import iconMail from './assets/icon_mail.png';
import iconChat from './assets/icon_chat.png';
import iconWeb from './assets/icon_web.png';
import iconPhotos from './assets/icon_photos.png';
import iconTrash from './assets/icon_trash.png';

class Home extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div id="menu_bar">
        <div id="menu_bar_logo"></div>
        <div id="app_portal_files" class="app_portal">
          <div class="app_icon_bg"><img class="app_icon" src={iconFile} /></div>
          <div class="menu_app_name">Files</div>
        </div>
        <div id="app_portal_files" class="app_portal">
          <div class="app_icon_bg"><img class="app_icon" src={iconMail} /></div>
          <div class="menu_app_name">Mail</div>
        </div>
        <div id="app_portal_files" class="app_portal">
          <div class="app_icon_bg"><img class="app_icon" src={iconChat} /></div>
          <div class="menu_app_name">Chat</div>
        </div>
        <div id="app_portal_files" class="app_portal">
          <div class="app_icon_bg"><img class="app_icon" src={iconWeb}/></div>
          <div class="menu_app_name">Web</div>
        </div>
        <div id="app_portal_files" class="app_portal">
          <div class="app_icon_bg"><img class="app_icon" src={iconPhotos} /></div>
          <div class="menu_app_name">Photos</div>
        </div>
        <div id="app_portal_files" class="app_portal">
          <div class="app_icon_bg"><img class="app_icon" src={iconTrash} /></div>
          <div class="menu_app_name">Trash</div>
        </div>
      </div>
    );
  }
}

export default Home;
