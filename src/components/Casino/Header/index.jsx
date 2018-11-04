import React from 'react';
import Player from './Player';
import Search from './Search';

const Header = () => (
    <div className="ui grid centered">
        <Player />
        <Search />
    </div>
);

export default Header;
