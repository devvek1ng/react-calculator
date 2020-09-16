import React, { Component } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
import ClearButton from "./Components/ClearButton";







function Calculate(firstNumber, secondNumber, operation) {
  if (operation === 'plus') {
    return parseFloat(firstNumber) + parseFloat(secondNumber)
  } else if (operation === 'subtract') {
    return parseFloat(firstNumber) - parseFloat(secondNumber)
  } else if (operation === 'multiply') {
    return parseFloat(firstNumber) * parseFloat(secondNumber)
  } else if (operation === 'divide') {
    return parseFloat(firstNumber) / parseFloat(secondNumber)
  }
}


    class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
          input: "",
          previousNumber: "",
          currentNumber: "",
          operator: ""
        };
      }

      addToInput = val => {
        this.setState({input: this.state.input + val});
      };

      addDecimal = val => {
        // only add decimal if there is no current decimal point present in the input area
        if (this.state.input.indexOf(".") === -1) {
          this.setState({input: this.state.input + val});
        }
      };

      addZeroToInput = val => {
        // if this.state.input is not empty then add zero
        if (this.state.input !== "") {
          this.setState({input: this.state.input + val});
        }
      };

      clearInput = () => {
        this.setState({input: ""});

      };

      add = () => {

        this.state.previousNumber = this.state.input;
        this.setState({input: ""});
        this.state.operator = "plus";
      };

      subtract = () => {
        this.state.previousNumber = this.state.input;
        this.setState({input: ""});
        this.state.operator = "subtract";
      };

      multiply = () => {
        this.state.previousNumber = this.state.input;
        this.setState({input: ""});
        this.state.operator = "multiply";
      };

      divide = () => {
        this.state.previousNumber = this.state.input;
        this.setState({input: ""});
        this.state.operator = "divide";
      };

      evaluate = () => {
        let result = Calculate(this.state.previousNumber, this.state.input, this.state.operator);
        if (result % 10 ){


        }
        else
        {
          alert ("Ответ кратен 10")
        }
        this.setState({
          input: result
        })
      };


      render() {
        return (
            <div className="App">
              <div className="calc-wrapper">
                <div className="row">
                  <Input>{this.state.input}</Input>
                </div>

                <div className="row">
                  <Button handleClick={this.addToInput}>7</Button>
                  <Button handleClick={this.addToInput}>8</Button>
                  <Button handleClick={this.addToInput}>9</Button>
                  <Button handleClick={this.divide}>/</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>4</Button>
                  <Button handleClick={this.addToInput}>5</Button>
                  <Button handleClick={this.addToInput}>6</Button>
                  <Button handleClick={this.multiply}>*</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>1</Button>
                  <Button handleClick={this.addToInput}>2</Button>
                  <Button handleClick={this.addToInput}>3</Button>
                  <Button handleClick={this.add}>+</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addDecimal}>.</Button>
                  <Button handleClick={this.addZeroToInput}>0</Button>
                  <Button handleClick={this.evaluate}>=</Button>
                  <Button handleClick={this.subtract}>-</Button>
                </div>
                <div className="row">
                  <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
                </div>
              </div>
            </div>
        );
      }
    }

  export default App;
