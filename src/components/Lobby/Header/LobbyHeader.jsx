import React from 'react';
import PlayerInfo from './Player/PlayerInfo';
import SearchBar from './Search/SearchBar';

const LobbyHeader = () => (
    <div className="ui grid centered">
        <PlayerInfo />
        <SearchBar />
    </div>
);

export default LobbyHeader;
