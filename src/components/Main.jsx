import React from 'react';
import LoginScreen from './Login/LoginScreen';
import LobbyScreen from './Lobby/LobbyScreen';
import GameScreen from './Game/GameScreen';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Main extends React.Component {
    render() {
        const displayLoginScreen =
            (!this.props.isLoginSuccess || this.props.isLogoutSuccess) &&
            !this.props.gameToLoad;
        const displayLoobbyScren =
            this.props.isLoginSuccess &&
            !this.props.isLogoutSuccess &&
            !this.props.gameToLoad;
        const displayGameScreen =
            this.props.isLoginSuccess &&
            !this.props.isLogoutSuccess &&
            this.props.gameToLoad;
        return (
            <div className="main container">
                {displayLoginScreen && <LoginScreen />}
                {displayLoobbyScren && <LobbyScreen />}
                {displayGameScreen && <GameScreen />}
            </div>
        );
    }
}

Main.propTypes = {
    isLoginSuccess: PropTypes.bool.isRequired,
    gameToLoad: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    isLoginSuccess: state.login.isLoginSuccess,
    isLogoutSuccess: state.login.isLogoutSuccess,
    gameToLoad: state.game.code
});

export default connect(mapStateToProps)(Main);
