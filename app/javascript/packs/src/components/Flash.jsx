import React, { Fragment } from "react";
import { connect } from "react-redux";
import { REMOVE_FLASH } from "../actions/types";

class Flash extends React.Component {
  render() {
    let { messages } = this.props;
    if (messages.length == 0) return <Fragment />;
    return (
      <Fragment>
        {messages.map((el, index) => (
          <div
            key={index}
            className="my-2 px-3 py-4 bg-danger border border-danger rounded w-100 d-flex justify-content-between"
          >
            <h5 className="text-white">{el.message}</h5>
            <h5 onClick={() => this.props.removeFlash(el.id)}>close</h5>
          </div>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  let { messages } = state;
  return {
    messages
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeFlash: id => dispatch({ type: REMOVE_FLASH, id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Flash);
