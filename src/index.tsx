import React , { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>Hello world => {count}</div>
      <div onClick={() => setCount(count + 1)}> click me </div>
    </div>
  )
}

export default ReactDOM.render(<App />, document.getElementById('app'))
