import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer>
      <div>© Yusei Niwa Portfolio { (new Date()).getFullYear() }</div>
    </footer>
  )
}

export default Footer