import React from 'react'
import { ITicket } from '../models'

interface IProps {
  ticketList: any[]
}

interface IState {
  list: any[]
}


class SeatsMapComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      list: this.props.ticketList
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      list: props.ticketList
    }
  }

  render() {
    const { list } = this.state
    return (
      <div>
        {list.map((areas, aindex) => {
          return(
            <table key={aindex}>
              {areas.map((rows, rindex) => {
                return (
                  <tr key={rindex+'-'+rows}>
                    {rows.map((seats) => {
                      return <td key={seats.id}>{seats.id}</td>
                    })}
                  </tr>
                )
              })}
            </table>
          )
        })}
      </div>
    )
  }
}

export default SeatsMapComponent