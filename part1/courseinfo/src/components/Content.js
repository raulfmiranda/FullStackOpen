import React from 'react'
import Part from './Part'

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]}/>
      <Part part={props.course.parts[1]}/>
      <Part part={props.course.parts[2]}/>
    </div>
  )
}

export default Content;