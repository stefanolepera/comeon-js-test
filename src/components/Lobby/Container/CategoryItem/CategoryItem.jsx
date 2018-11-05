import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterByCategory } from '../../../../actions/filterAction';

class CategoryItem extends React.Component {
    onClick = () => {
        this.props.filterByCategory(this.props.category.id);
    };

    render() {
        return (
            <div
                className="ui selection animated list category items"
                onClick={this.onClick}
            >
                <div className="category item">
                    <div className="content">
                        <div className="header">{this.props.category.name}</div>
                    </div>
                </div>
            </div>
        );
    }
}

CategoryItem.propTypes = {
    category: PropTypes.object.isRequired
};

export default connect(
    null,
    { filterByCategory }
)(CategoryItem);
