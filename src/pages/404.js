import { Link } from "gatsby"
import React from "react"
import "../styles/404.css"

const NotFound = () => {
  return (
    <div className = "error-page">
      <p>アクセスしたページは存在しません。</p>
      <Link to = "/">
        <button className = "error-button">Home</button>
      </Link>
    </div>
  )
}

export default NotFound