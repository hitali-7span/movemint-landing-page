import React from 'react'
import HorizontalSlider from "./horizontal-slider"
import VerticalSlider from "./vertical-slider"

function testimonial() {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2'>
      <HorizontalSlider />
      <VerticalSlider />
    </div>
  )
}

export default testimonial