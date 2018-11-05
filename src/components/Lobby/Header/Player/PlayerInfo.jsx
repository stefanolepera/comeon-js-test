import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../../actions/postAction';
import { resetAllFilter } from '../../../../actions/filterAction';

class PlayerInfo extends React.Component {
    onClick = () => {
        const credentials = {
            username: this.props.username
        };

        this.props.logout(credentials);
    };

    render() {
        return (
            <div className="twelve wide column">
                <div className="ui list">
                    <div className="player item">
                        <img
                            className="ui avatar image"
                            src={this.props.avatar}
                            alt="avatar"
                        />
                        <div className="content">
                            <div className="ui header">
                                <b className="name">{this.props.name}</b>
                            </div>
                            <div className="description event">
                                {this.props.event}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="logout ui left floated secondary button inverted"
                    onClick={this.onClick}
                >
                    <i className="left chevron icon" />
                    Log Out
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.login.username,
    name: state.user.player.name,
    avatar: state.user.player.avatar,
    event: state.user.player.event
});

const mapDispatchToProps = dispatch => {
    return {
        logout: credentials => {
            dispatch(logout(credentials));
            dispatch(resetAllFilter());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerInfo);
