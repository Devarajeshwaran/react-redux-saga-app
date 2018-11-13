import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { onRequestDogAction } from '../actionCreators/dogAction';
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    const defaultImageSrc = "/dist/images/header.jpg";
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || defaultImageSrc} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: bindActionCreators(onRequestDogAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);