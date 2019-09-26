import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './components/App'

// const ClickComponent = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <div>Hello world => {count}</div>
//       <div onClick={() => setCount(count + 1)}> click me </div>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <Provider store={store}>
//       <ClickComponent />
//     </Provider>
//   )
// }

// export default ReactDOM.render((
//   <Provider store={store}>
//     <App />
//   </Provider>
// ), document.getElementById('app'))

class Students {
  public name: string
  
  constructor(name) {
    this.name = name
  }

  hello() {
    console.log(`my name is ${this.name}`)
  }
}

export default class primaryStudents extends Students {
  public grade: number
  constructor(name, grade) {
    super(name)
    this.grade = grade
  }

  read() {
    console.log(`Im reading Grade ${this.grade}`)
  }
}

