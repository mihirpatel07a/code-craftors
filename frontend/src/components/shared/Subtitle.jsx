import React from 'react'

const Subtitle = ({subtitle}) => {
  return (
   <h3 className='section__subtitle' style={{"backgroundColor": "var(--primary-color)"}}>{subtitle}</h3>
  )
}

export default Subtitle