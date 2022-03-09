import React, { Component } from 'react'
import "./Button.scss";

export default class Button extends Component {
  render() {
    return (
      <button
        value={this.props.value}
        onClick={(e) => this.props.onClick(e.target.value)}
        className={this.props.class && this.props.class}
      >
        {this.props.value}
      </button>
    );
  }
}
