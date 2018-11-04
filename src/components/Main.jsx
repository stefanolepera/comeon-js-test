import React from "react";
import Login from "./Login";
import Casino from "./Casino";
import Game from "./Game";
import { connect } from "react-redux";

class Main extends React.Component {
  render() {
    return (
      <div className="main container">
        {!this.props.isLoginSuccess && !this.props.gameToLoad && <Login />}
        {this.props.isLoginSuccess && !this.props.gameToLoad && <Casino />}
        {this.props.gameToLoad && this.props.isLoginSuccess && <Game />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoginSuccess: state.login.isLoginSuccess,
  gameToLoad: state.game.code
});

export default connect(mapStateToProps)(Main);
