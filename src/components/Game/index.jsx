import React from "react";
import { connect } from "react-redux";
import { backToLobby } from "../../actions/loadGameAction";

class Game extends React.Component {
  componentDidMount() {
    window.comeon.game.launch(this.props.game);
  }

  onClick = () => {
    this.props.backToLobby();
  };

  render() {
    return (
      <div className="ingame">
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

const mapStateToProps = state => ({
  game: state.game.code
});

export default connect(
  mapStateToProps,
  { backToLobby }
)(Game);
