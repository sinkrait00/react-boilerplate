import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import ResizeDetector from './components/resize-detector/Resize-detector'
import { setupStore } from './store'

ReactDOM.render(
  <Provider store={setupStore()}>
    <BrowserRouter>
      <ResizeDetector>
        <App />
      </ResizeDetector>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
