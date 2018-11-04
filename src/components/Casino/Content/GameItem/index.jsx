import React from "react";
import { connect } from "react-redux";
import { loadGame } from "../../../../actions/loadGameAction";

class GameItem extends React.Component {
  onClick = () => {
    this.props.loadGame(this.props.game.code);
  };

  render() {
    return (
      <div className="ui relaxed divided game items links">
        <div className="game item">
          <div className="ui small image">
            <img src={this.props.game.icon} alt="game-icon" />
          </div>
          <div className="content">
            <div className="header">
              <b className="name">{this.props.game.name}</b>
            </div>
            <div className="description">{this.props.game.description}</div>
            <div className="extra">
              <div
                className="play ui right floated secondary button inverted"
                onClick={this.onClick}
              >
                Play
                <i className="right chevron icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { loadGame }
)(GameItem);
