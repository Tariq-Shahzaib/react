import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="mb-4 ">
        <span className="badge badge-success">{this.props.counter.value}</span>
        <button
          onClick={() => this.props.handleInrement(this.props.counter)}
          className="btn btn-primary btn-lg ml-4"
        >
          Increase
        </button>

        <button
          onClick={() => this.props.handleDecrement(this.props.counter)}
          className="btn btn-primary btn-lg ml-4"
        >
          Decrease
        </button>

        <button
          onClick={() => this.props.handleDelete(this.props.counter)}
          className="btn btn-danger btn-lg ml-4"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
