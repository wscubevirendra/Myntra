import React from 'react'
import Container from './Container'
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function Header() {
    const cart = useSelector(store => store.cart.cartItems);
    const menu=[
{
    name:"MEN",
    link:"/"
},
{
    name:"WOMEN",
    link:"/"
},{
    name:"KIDS",
    link:"/"
}
,{
    name:"HOME & LIVING",
    link:"/"
},{
    name:"BEAUTY",
    link:"/"
},{
    name:"Studio",
    link:"/"
}
    ]

    
  return (
   <Container  fluid={true} extraClass="h-shadow bg-[white] sticky z-50 top-0  justify-between flex  py-4  myboxshadow">
 
<img src="img/myntra.png" alt="" />
<ul className='flex gap-20 uppercase items-center'>
    {
        menu.map((data,i)=>{
        return (
            <Link to={data.link} key={i}>
             <li >{data.name}</li>
            </Link>
        )
        })
    }
<Link to="/cart">
   <span className='flex gap-2'> <FaCartPlus className='text-[25px]'/>Cart({cart.length})</span>
    </Link>
</ul>
   </Container>
  )
}
