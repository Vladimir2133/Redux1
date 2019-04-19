import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/Tabs/App'
import * as serviceWorker from './serviceWorker'
import { ThemeContextProvider } from 'context/contextApp'
import { reducer } from "reducers/index"


export const store  = createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <ThemeContextProvider>
      <Provider store={store}>
          <App />
      </Provider>
  </ThemeContextProvider>,
  document.getElementById('root')
)


serviceWorker.unregister()
