import React, { Component } from 'react'
import "./Calculator.scss"

export default class Calculator extends Component {
  render() {
  return (
      <div className="calculator">
        <div className="calculator-screen">
          <div className="calculator-result">13</div>
          <div className="calculator-current">6+7</div>
        </div>
        <div className="calculator-buttons">
          <button className="span-two ac">AC</button>
          <button>DEL</button>
          <button>÷</button>

          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>x</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button className="span-two">=</button>
        </div>
      </div>
    )
  }
}
