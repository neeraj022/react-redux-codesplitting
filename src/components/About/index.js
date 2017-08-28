// src/components/About/index.js
import React, { Component } from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './style.css';
import {Link} from 'react-router-dom';

class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='About'>
        <h1>
          About
        </h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(About)
