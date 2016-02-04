import WorkflowBuilder from './containers/WorkflowBuilder'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import './_assets/scss/style.scss';

const store = configureStore()

render(
  <Provider store={store}>
    <WorkflowBuilder />
  </Provider>,
  document.getElementById('root')
)


