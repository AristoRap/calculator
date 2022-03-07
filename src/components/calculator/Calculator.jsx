import React, { Component } from 'react'
import "./Calculator.scss"

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator-wrapper">
        <div className="calculator">
          <div className="calculator-screen">
            <div className="calculator-result">13</div>
            <div className="calculator-current">6+7</div>
          </div>
            <div className="calculator-operators">
              <button>C</button>
              <button>DEL</button>
              <button>÷</button>
              <button>x</button>
              <button>+</button>
              <button>-</button>
            </div>
        </div>
      </div>
    )
  }
}
