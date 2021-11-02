import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer>
      <div>© Gatsby Blog Site { (new Date()).getFullYear() }</div>
    </footer>
  )
}

export default Footer