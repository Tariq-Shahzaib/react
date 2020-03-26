import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
  state = {
    counter: [
      { value: 0, id: 1 },
      { value: 1, id: 2 },
      { value: 2, id: 3 },
      { value: 3, id: 4 },
    ],
  };

  handleReset = () => {
    const counter = this.state.counter.map(obj => {
      obj.value = 0;
      return obj;
    });
    this.setState({ counter });
  };

  removeOne = obj => {
    console.log(obj);
    const counter = this.state.counter.filter(c => c !== obj);
    this.setState({ counter });
  };

  decrement = obj => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(obj);
    counter[index] = { ...obj };
    if (counter[index].value > 0) counter[index].value--;
    this.setState({ counter });
  };

  increment = obj => {
    const counter = [...this.state.counter];
    const index = counter.indexOf(obj);
    counter[index] = { ...obj };
    counter[index].value++;
    this.setState({ counter });
  };
  render() {
    return (
      <div className="container ">
        <div class=" d-flex flex-row bd-highlight mb-6 ">
          <button
            onClick={this.handleReset}
            className="btn btn-warning btn-lg mb-4"
          >
            Reset
          </button>
        </div>
        {this.state.counter.map(s => (
          <Counter
            counter={s}
            key={s.id}
            handleInrement={this.increment}
            handleDecrement={this.decrement}
            handleDelete={this.removeOne}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
