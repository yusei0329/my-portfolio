import React from 'react'
import Header from './header'
import Footer from './footer'
import "../styles/layout.css"


const Layout = ( props ) => {
  return (
    <>
      <Header/>
      <div class="continer">
      { props.children }
      </div>
        
      <Footer/>
    </>
  )
}

export default Layout