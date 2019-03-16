import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>Indigenous Data</span>
          </a>
          <span style={{fontSize: '28px'}}>Open Data</span>
        </h1>
      </div>
    </header>
  );
}
