import React from 'react';
import LoginScreen from './Login/LoginScreen';
import LobbyScreen from './Lobby/LobbyScreen';
import GameScreen from './Game/GameScreen';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Main extends React.Component {
    render() {
        return (
            <div className="main container">
                {!this.props.isLoginSuccess &&
                    !this.props.gameToLoad && <LoginScreen />}
                {this.props.isLoginSuccess &&
                    !this.props.gameToLoad && <LobbyScreen />}
                {this.props.gameToLoad &&
                    this.props.isLoginSuccess && <GameScreen />}
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
    gameToLoad: state.game.code
});

export default connect(mapStateToProps)(Main);
