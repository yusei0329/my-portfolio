import React from "react"
import PagesLayout from "../components/pages-layout"
import Skills from "../components/skills"
import { FiExternalLink } from "react-icons/fi"
import "../styles/about-page.css"


class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <PagesLayout title={"About Me"}>
          <h1 className="about-h1">丹羽佑成 / Yusei Niwa</h1>
          <table className="about-table">
            <tr>
              <th>年齢</th>
              <td>20 ( 2001.3.29 )</td>
            </tr>
            <tr>
              <th>大学</th>
              <td>愛知工業大学</td>
            </tr>
            <tr>
              <th>学部</th>
              <td>情報科学部 メディア情報専攻</td>
            </tr>
            <tr>
              <th>所属</th>
              <td>
                <a href="http://aitech.ac.jp/cgmedia/" target="_blank" rel="nofollow">
                  CGメディア研究室
                </a>
              </td>
            </tr>
          </table>
          <div className="about-h1">
            <h1 >Skills</h1>
          </div>
          <Skills />
        </PagesLayout>
      </div>
    )
  }
}

export default AboutPage