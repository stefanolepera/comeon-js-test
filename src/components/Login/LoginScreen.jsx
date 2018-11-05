import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/postAction';
import PropTypes from 'prop-types';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            loginError: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.loginError !== prevProps.loginError) {
            this.setState({
                username: '',
                password: '',
                loginError: this.props.loginError
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const credentials = {
            username: this.state.username.replace(/\s/g, ''),
            password: this.state.password.replace(/\s/g, '')
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
                    </form>
                </div>
                {
                    <div className="ui header centered">
                        {this.props.loginError}
                    </div>
                }
            </div>
        );
    }
}

LoginScreen.propTypes = {
    loginError: PropTypes.string.isRequired,
    isLoginSuccess: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    loginError: state.login.loginError,
    isLoginSuccess: state.login.isLoginSuccess
});

export default connect(
    mapStateToProps,
    { login }
)(LoginScreen);
