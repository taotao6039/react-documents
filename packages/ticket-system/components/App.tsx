import React from 'react'
import SeatsMapComponent from './SeatsMapComponent'
import BuyComponent from './BuyComponent'
import OwnSeatsComponent from './OwnSeatsComponent'

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


interface ITicket{
  id: string,
  area: string,
  row: string,
  seat: string,
  price: number
}

interface IState{
  ticketList: ITicket[]
}

const MIN_SEAT_NUM = 50
const MAX_SEAT_NUM = 100
const ROW_NUM = 52

export default class App extends React.Component<IState>{
  constructor(props: any) {
    super(props)
    this.state = {
      ticketList: []
    }
  }

  componentDidMount() {
    // set data
    const initList:ITicket[] = []
    for(let i=1; i<=4; i++){
      for(let j = MIN_SEAT_NUM;j<MAX_SEAT_NUM; j=j+2) {
        const row = 
        initList.push()
      }
    }
    
  }

  render () {
    return (
      <div>
        <SeatsMapComponent />
        <BuyComponent />
        <OwnSeatsComponent />
      </div>
    )
  }
}