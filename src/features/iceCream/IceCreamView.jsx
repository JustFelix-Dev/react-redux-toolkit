import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export const IceCreamView = () => {
    const [ value,setValue ] = useState(1)
    const numOfCreams = useSelector((state)=> state.iceCream.numOfCreams)
    const dispatch = useDispatch()
  return (
         <>
         <h2>Number of IceCream - { numOfCreams } </h2>
         <button onClick={()=> dispatch(ordered())}>Order IceCream</button>
         <input type="text" inputMode='numeric' defaultValue={value} onChange={(e)=> setValue(parseInt(e.target.value))} />
         <button onClick={()=> dispatch(restocked(value))}>Restock IceCreams</button>
         </>
  )
}

