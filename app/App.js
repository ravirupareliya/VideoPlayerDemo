import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './Container/RootContainer'
import { store } from './Redux/CreateStore'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}