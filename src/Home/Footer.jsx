import React from 'react';
import { footer } from './data';
import Unesco from '../../src/un-logo.png'

function antCloudFooter() {
  const children = footer.map((item, i) => (<div key={i}><a href={item.src} target="__blank">{item.text}</a></div>));
  return (<div>
    <div className="logo" key="logo">
      <img src={Unesco} width="90" height="90" />
    </div>
    <div key="nav" className="home-footer-nav-wrapper">
      {children}
    </div>
  </div>
  );
}

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">The UN Declaration on the Rights of Indigenous Peoples is a major milestone.
          But it will not succeed without the support of people everywhere.</p>
      </div>
    </div>
  );
}

export default Footer;
