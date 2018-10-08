import React, { Component } from 'react';

import SearchBox from './SearchBox';

const Header = (props) => {
  return (
    <div>
      <h1 className="f1">RoboFriends</h1>
      <SearchBox search={props.search} />
    </div>
  );
};

export default Header;
