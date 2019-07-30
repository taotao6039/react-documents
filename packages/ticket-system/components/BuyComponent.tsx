import React, { useState } from 'react'

const BuyComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>Hello world => {count}</div>
      <button onClick={() => setCount(count + 1)}> 购买 </button>
    </div>
  )
}

export default BuyComponent