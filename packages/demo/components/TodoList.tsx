import React  from 'react'

export default class TodoList extends React.Component{

  static contextTypes = {
    todos: {}
  }

  constructor(props: any) {
    super(props)
  }

  render() {
    const { todos } = this.context
    return (
      <div>
        <div>{todos}</div>
        {
          todos.map((index: number, item: any) => {
            <div>{item.text}</div>
          })
        }
      </div>
    )
  }
}