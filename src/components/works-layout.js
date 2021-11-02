import React from 'react'
import WorksHeader from './works-header'
import Footer from './footer'
import "../styles/layout.css"


const WorksLayout = (props) => {
  return (
    <div className="works">
      <WorksHeader />
      <div class="continer">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default WorksLayout