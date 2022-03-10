import React, { Component } from 'react'
import "./Button.scss";

export default class Button extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick(this.props.value)}
        className={this.props.class}
      >
        {this.props.value}
      </button>
    );
  }
}
