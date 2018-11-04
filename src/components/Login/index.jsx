import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/postAction";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const credentials = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(credentials);
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="login">
        <div className="ui grid centered">
          <form onSubmit={this.onSubmit}>
            <div className="fields">
              <div className="required field">
                <div className="ui icon input">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.onChange}
                    value={username}
                    autoFocus
                  />
                  <i className="user icon" />
                </div>
              </div>
              <div className="required field">
                <div className="ui icon input">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.onChange}
                    value={password}
                  />
                  <i className="lock icon" />
                </div>
              </div>
              <div className="field">
                <div className="ui icon input">
                  <input type="submit" value="Login" />
                  <i className="right chevron icon" />
                </div>
              </div>
            </div>
            {this.props.loginError && (
              <div className="item">{this.props.loginError}</div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginError: state.login.loginError
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
