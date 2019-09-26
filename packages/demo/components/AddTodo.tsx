import React from 'react'

interface IProps {
  onAddSubmit: (text: string) => void
}

export default class AddTodo extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
  }

  handleSubmit(e: any) {
    e.preventDefault()
    const node = this.refs.input as HTMLInputElement
    const text = node.value.trim()
    if (text) {
      this.props.onAddSubmit(text)
      node.value = ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={(e) => this.handleSubmit(e)}>Add</button>
      </div>
    )
  }
}
