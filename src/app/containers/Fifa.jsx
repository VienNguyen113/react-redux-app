import React from "react";
import { object, func } from "prop-types";
import { connect } from "react-redux";

import { FifaComponent } from "app/components/fifa";

class Fifa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <FifaComponent />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {};
};

Fifa.defaultProps = {};

Fifa.propTypes = {};

export default connect(mapStateToProps, {
})(Fifa);
