import React, { createContext } from 'react'

const Maincontext=createContext()

export default function Context(props) {
  return (
   <Maincontext.Provider>
{
    props.chidren
}
   </Maincontext.Provider>
  )
}
