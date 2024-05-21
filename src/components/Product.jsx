import React from 'react'
import Filter from './Filter'
import Card from './Card'

export default function Product() {
  return (
<div className='grid grid-cols-4 '>
<Filter/>
<Card />
</div>
  )
}
