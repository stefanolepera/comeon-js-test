import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { backToLobby, loadGame } from '../../actions/loadGameAction';

class Game extends React.Component {
    componentDidMount() {
        window.comeon.game.launch(this.props.gameCode);
    }

    onClick = () => {
        this.props.backToLobby();
    };

    onChange = e => {
        this.props.loadGame(e.target.value);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.gameCode !== this.props.gameCode) {
            window.comeon.game.launch(this.props.gameCode);
        }
    }

    render() {
        return (
            <div className="ingame">
                <div className="ui grid centered">
                    <div className="four wide column">
                        <select
                            className="dropdown"
                            onChange={this.onChange}
                            value={this.props.gameCode}
                        >
                            {this.props.games.map(game => (
                                <option key={game.code} value={game.code}>
                                    {game.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="ui grid centered">
                    <div className="three wide column">
                        <div
                            className="ui right floated secondary button inverted"
                            onClick={this.onClick}
                        >
                            <i className="left chevron icon" />
                            Back
                        </div>
                    </div>
                    <div className="ten wide column">
                        <div id="game-launch" />
                    </div>
                    <div className="three wide column" />
                </div>
            </div>
        );
    }
}

Game.propTypes = {
    gameCode: PropTypes.string.isRequired,
    games: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    gameCode: state.game.code,
    games: state.content.games
});

export default connect(
    mapStateToProps,
    { backToLobby, loadGame }
)(Game);
