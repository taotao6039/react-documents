import React from 'react'
import SeatsMapComponent from './SeatsMapComponent'
import BuyComponent from './BuyComponent'
import OwnSeatsComponent from './OwnSeatsComponent'
import { ITicket } from '../models'

// 1，购票系统的座位分布数据
// 2，购买 1-5 张票的条件：随机、连座（由于是公司举办的，假设：座位宽窄一样、所有座位价格一致、用户没有自由选座的要求）
// 3，公布购买的位置信息
/* 4，
  假设信息：位子宽窄，前后排距离，圆周弧度。
  另外的权重信息：从经验来看，1，2，3，4，5 购票数量分别所占的比例，然后可以带到分配座位时候的权重里面
  比如比如大部分没有买 5 座的，那么当剩下几个 5 的簇，就可以分给 2 + 3，或 2 + 2 + 1
  根据比例来看权重，来判断是否有必要把5连排的座位拆开，或继续往后留
  以及可以大概估摸一个比例，在票剩下多少时候就开始拆连排的
*/


interface IState{
  ticketList: any[]
}

export default class App extends React.Component<{}, IState>{
  constructor(props: any) {
    super(props)
    
    this.state = {
      ticketList: this.getReadyData()
    }
  }

  componentDidMount() {
    // set data
    
    // console.log(maps)
    // this.setState({
    //   ticketList: maps
    // })
  }

  render () {
    const { ticketList } = this.state
    return (
      <div>
        <SeatsMapComponent ticketList={ticketList}/>
        <BuyComponent />
        <OwnSeatsComponent />
      </div>
    )
  }

  getReadyData() {
    const maps = []
    for (let i = 0; i < 4; i++) { // 区
      const areas = []
      for (let r = 0; r < 52; r++) { // 排
        const rows = []
        const seats = (r % 2 === 0) ? 50 + r : 50 + r - 1
        for (let j = 0; j < seats; j++) { // 座
          rows.push({
            id: `${i + 1}-${r + 1}-${j + 1}`,
            area: i + 1,
            row: r + 1,
            seat: j + 1,
            price: 1,
            isSaled: false
          })
        }
        areas[r] = rows
      }
      maps[i] = areas
    }
    return maps
  }
}