import React, { Component } from "react";
import "./Calculator.scss";
import Button from "../../components/button/Button";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { primary: "0", secondary: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(value) {
    const operators = ["÷", "x", "+", "-"];

    if (value === "AC") {
      this.allClear();

    } else if (value === "DEL") {
      this.delete();

    } else if (operators.includes(value) && this.state.secondary.includes(value)) {
        this.perform(value);
    } else if (value === '.') {
      let newPrimary = this.state.primary.includes(value) ? this.state.primary : this.state.primary + value;
      let newSecondary = newPrimary;
      this.setState({ primary: newPrimary, secondary: newSecondary });

    } else if (operators.includes(value)) {
      this.operate(value);
    } else {
      let newPrimary =
        this.state.primary === "0" ? value : this.state.primary + value;
      this.setState({ primary: newPrimary });
    }
  }
  allClear() {
    this.setState({ primary: "0", secondary: "" });
  }
  delete() {
    const newPrimary =
      this.state.primary.length === 1 ? "0" : this.state.primary.slice(0, -1);
    this.setState({ primary: newPrimary });
  }
  operate(operation) {
    const operators = ["÷", "x", "+", "-"];
    const newSecondary = operators.includes(this.state.primary.slice(-1))
    ? this.state.primary.slice(0, -1) + operation
    : this.state.primary + operation;
    const newPrimary = '0';
    this.setState({ primary: newPrimary, secondary: newSecondary });
  }
  perform(operation) {
    const previous = this.state.secondary.slice(0, -1);
    const current = this.state.primary
    let newSecondary;
    if (operation === 'x') {
      newSecondary =
        (Number(previous) * Number(current)).toString() + operation;
    } else if (operation === '+') {
      newSecondary =
        (Number(previous) + Number(current)).toString() + operation;
    } else if (operation === '-') {
      newSecondary =
        (Number(previous) - Number(current)).toString() + operation;
    } else {
      newSecondary =
        (Number(previous) / Number(current)).toString() + operation;
    }
    this.setState({ primary: '0', secondary: newSecondary });
  }
  render() {
    return (
      <div className="calculator">
        <div className="calculator-screen">
          <div className="calculator-secondary">{this.state.secondary}</div>
          <div className="calculator-primary">{this.state.primary}</div>
        </div>
        <div className="calculator-buttons">
          <Button value="AC" class="span-two ac" onClick={this.handleClick} />
          <Button value="DEL" onClick={this.handleClick} />
          <Button value="÷" onClick={this.handleClick} />
          <Button value="1" onClick={this.handleClick} />
          <Button value="2" onClick={this.handleClick} />
          <Button value="3" onClick={this.handleClick} />
          <Button value="x" onClick={this.handleClick} />
          <Button value="4" onClick={this.handleClick} />
          <Button value="5" onClick={this.handleClick} />
          <Button value="6" onClick={this.handleClick} />
          <Button value="+" onClick={this.handleClick} />
          <Button value="7" onClick={this.handleClick} />
          <Button value="8" onClick={this.handleClick} />
          <Button value="9" onClick={this.handleClick} />
          <Button value="-" onClick={this.handleClick} />
          <Button value="." onClick={this.handleClick} />
          <Button value="0" onClick={this.handleClick} />
          <Button value="=" class="span-two" />
        </div>
      </div>
    );
  }
}
