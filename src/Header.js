import React, { Component } from 'react';
import './Header.css';
import { Consumer } from './context';

const Header = () => (
  <Consumer>
    {({ state, setState }) => (
      <div className="header">
        <span>
          <a
            href=""
            onClick={e => {
              e.preventDefault();
              setState({ modal: 'login' });
            }}
          >
            Login
          </a>
        </span>
      </div>
    )}
  </Consumer>
);

export default Header;
