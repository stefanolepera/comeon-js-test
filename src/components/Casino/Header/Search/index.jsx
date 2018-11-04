import React from 'react';
import { connect } from 'react-redux';
import { filterByName } from '../../../../actions/filterAction';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchgame: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.props.filterByName(this.state.searchgame);
        });
    };

    render() {
        const { searchgame } = this.state;
        return (
            <div className="four wide column">
                <div className="search ui small icon input ">
                    <input
                        type="text"
                        name="searchgame"
                        placeholder="Search Game"
                        onChange={this.onChange}
                        value={searchgame}
                    />
                    <i className="search icon" />
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    { filterByName }
)(Search);
