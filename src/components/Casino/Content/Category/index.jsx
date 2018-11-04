import React from "react";
import { connect } from "react-redux";
import { filterByCategory } from "../../../../actions/filterAction";

class Category extends React.Component {
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

export default connect(
  null,
  { filterByCategory }
)(Category);
