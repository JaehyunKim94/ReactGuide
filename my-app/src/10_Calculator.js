import BoilingVerdict from "./10_BoilingVerdict";
import TemperatureInput from "./10_TemperatureInput";
import React from "react";

function toCelsius(farhrenheit) {
  return ((farhrenheit - 32) * 5) / 9;
}

function toFarhrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 익명함수 convert
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "0",
      scale: "",
    };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    // scale 값에 따라 섭씨 <-> 화씨 변경 함수 실행
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const farhrenheit =
      scale === "c" ? tryConvert(temperature, toFarhrenheit) : temperature;

    return (
      <div>
        <h1>10_Lifting State Up</h1>
        <TemperatureInput
          scale="s"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={farhrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;
