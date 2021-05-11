import React from "react";
import Greeting from "./07_Greeting";
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      logout
    </button>
  )
}

class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <h1>07_ConditionalRendering</h1>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

export default ConditionalRendering;