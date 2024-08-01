import React from 'react'
import Hurizontal from "./horizontalSlider"
import Virtual  from "./virtualSlider"

function testimonial() {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2'>
        <Hurizontal/>
        <Virtual/>
    </div>
  )
}

export default testimonial