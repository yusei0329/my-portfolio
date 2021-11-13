import React from "react";
import "../styles/about.css"
import { Link } from "gatsby"
import { MdOutlineReadMore } from "react-icons/md"

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <h2>About Me</h2>
        <p>丹羽佑成 / Yusei Niwa</p>
        <table className = "about-table">
          <tr>
            <th>大学</th>
            <td>愛知工業大学</td>
          </tr>
          <tr>
            <th>所属</th>
            <td>CGメディア研究室</td>
          </tr>
        </table>
        <Link to = "/aboutPage">
          <MdOutlineReadMore  size="2rem"/>
        </Link>
      </div>
    )
  }
}

export default About