import React from 'react';
import {increment, incrementAsync, decrement, decrementAsync} from '../../actions';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Counter extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = {
        count: 0
      };
  }

  render()
  {
    return (<div>
    <h1>Counter</h1>
    <p>Count: {this.props.count}</p>

    <p>
      <button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button>
      <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrementing</button>
      <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrement Async</button>
    </p>

    <p><Link to="/">Home</Link></p>
  </div>);
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
