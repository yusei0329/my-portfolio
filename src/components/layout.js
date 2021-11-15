import React from 'react'
import Header from './header'
import Footer from './footer'
import "../styles/layout.css"


const Layout = (props) => {
  return (
    <>
      <div class="shutter">
        <h1 className="title-logo">YUSEI NIWA</h1>
      </div>
      <div className="first-time">
        <Header />
        <div class="continer">
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout