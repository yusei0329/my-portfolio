import React from 'react'
import PagesHeader from './pages-header'
import Footer from './footer'
import "../styles/layout.css"


const PagesLayout = (props) => {
    return (
      <div className="works">
        <PagesHeader title={props.title}/>
        <div class="continer">
          {props.children}
        </div>
        <Footer />
      </div>
    )
}

export default PagesLayout