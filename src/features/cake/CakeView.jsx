import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered,restocked } from './cakeSlice'

export const CakeView = () => {
  const numOfCakes =  useSelector((state)=> state.cake.numOfCakes )
  const dispatch = useDispatch()
  return (
         <>
         <h2>Number of Cake - {numOfCakes} </h2>
         <button onClick={()=> dispatch(ordered())}>Order Cake</button>
         <button onClick={()=> dispatch(restocked(8))}>Restock Cake</button>
         </>
  )
}

