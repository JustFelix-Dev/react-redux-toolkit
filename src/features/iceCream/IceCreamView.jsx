import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export const IceCreamView = () => {
    const numOfCreams = useSelector((state)=> state.iceCream.numOfCreams)
    const dispatch = useDispatch()
  return (
         <>
         <h2>Number of IceCream - { numOfCreams } </h2>
         <button onClick={()=> dispatch(ordered())}>Order IceCream</button>
         <button onClick={()=> dispatch(restocked(7))}>Restock IceCreams</button>
         </>
  )
}

