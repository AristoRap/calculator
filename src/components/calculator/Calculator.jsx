import React, { Component } from "react";
import "./Calculator.scss";
import Button from "../../components/button/Button";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { primary: '', secondary: ''};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(value) {
    let newPrimary = this.state.primary + value;
    let newSecondary = newPrimary;
    this.setState({ primary: newPrimary, secondary: newSecondary });
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator-screen">
          <div className="calculator-secondary">{this.state.secondary}</div>
          <div className="calculator-primary">{this.state.primary}</div>
        </div>
        <div className="calculator-buttons">
          <Button value="AC" class="span-two ac" />
          <Button value="DEL" />
          <Button value="÷" />
          <Button value="1" onClick={this.handleClick} />
          <Button value="2" onClick={this.handleClick} />
          <Button value="3" onClick={this.handleClick} />
          <Button value="x" />
          <Button value="4" onClick={this.handleClick} />
          <Button value="5" onClick={this.handleClick} />
          <Button value="6" onClick={this.handleClick} />
          <Button value="+" />
          <Button value="7" onClick={this.handleClick} />
          <Button value="8" onClick={this.handleClick} />
          <Button value="9" onClick={this.handleClick} />
          <Button value="-" />
          <Button value="." onClick={this.handleClick} />
          <Button value="0" onClick={this.handleClick} />
          <Button value="=" class="span-two" />
        </div>
      </div>
    );
  }
}
