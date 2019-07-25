import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'

const ClickComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Hello world => {count}</div>
      <div onClick={() => setCount(count + 1)}> click me </div>
    </div>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <ClickComponent />
    </Provider>
  )
}

export default ReactDOM.render(<App />, document.getElementById('app'))
