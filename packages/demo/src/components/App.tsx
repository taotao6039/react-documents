
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import * as TodoActions from '../actions'

class App extends React.Component {
  static childContextTypes = {
    todos: {}
  }

  getChildContext () {
    const { todos } = this.props
    return { todos }
  }
  
  constructor(props: any) {
    super(props)
  }

  render() {
    const { todos, actions } = this.props
    return (
      <div>
        <AddTodo onAddSubmit={(text) => {actions.addTodo(text)}}></AddTodo>
        <TodoList/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
