import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Product from './components/Product'
import Cart from './components/Cart'
import Main from './pages/Main'


const router=createBrowserRouter(
[
  {
    path:"/",
    element:<Main/>,
    children:[
      {
        path:"/",
        element:<Product/>
      },{
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
]

)

export default function App() {
  return (
<RouterProvider router={router}/>
  )
}



