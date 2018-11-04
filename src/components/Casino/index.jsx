import React from "react";
import Header from "./Header";
import Content from "./Content";

class Casino extends React.Component {
  render() {
    return (
      <div className="casino">
        <Header />
        <Content />
      </div>
    );
  }
}

export default Casino;
