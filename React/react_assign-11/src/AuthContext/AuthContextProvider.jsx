import React, { Component } from "react";

export const AuthContext = React.createContext();

export default class AuthContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: "",
      isAuth: false,
      isTheme: false,
      button: true,
    };
  }

  toggleAuth = () => {
    this.setState({
      isAuth: !this.state.isAuth,
    });
  };

  toggleTheme = () => {
    this.setState({
      isTheme: !this.state.isTheme,
      button: !this.state.button,
    });
  };

  setResponseData = (data) => {
    this.setState({
      responseData: data,
    });
  };

  render() {
    const { isAuth, responseData, isTheme, button } = this.state;
    const { toggleAuth, setResponseData, toggleTheme } = this;
    return (
      <AuthContext.Provider
        value={{
          responseData,
          isAuth,
          toggleAuth,
          setResponseData,
          isTheme,
          toggleTheme,
          button,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
