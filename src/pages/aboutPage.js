import React from "react"
import PagesLayout from "../components/pages-layout"
import Skills from "../components/skills"
import "../styles/about-page.css"
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";


class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <PagesLayout title={"About Me"}>
          <h1 className="about-h1">丹羽佑成 / Yusei Niwa</h1>
          <div className="about-main-page">
            <table className="about-table">
              <tr>
                <th>年齢</th>
                <td>20 ( 2001.3.29 )</td>
              </tr>
              <tr>
                <th>出身</th>
                <td>岐阜 /  Gifu</td>
              </tr>
              <tr>
                <th>大学</th>
                <td>愛知工業大学 / AIT</td>
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
              <tr>
                <th><AiOutlineGithub size="1.5rem" /></th>
                <td>
                  <a href="https://github.com/yusei0329" target="_blank" rel="nofollow">
                    GitHub
                  </a>
                </td>
              </tr>
              <tr>
                <th><AiOutlineMail size="1.5rem" /></th>
                <td>
                  <a href="mailto:nwys.28@gmail.com">
                    nwys.28@gmail.com
                  </a>
                </td>
              </tr>
            </table>
            <div className="skills-h1">
              <h1 >Skills</h1>
            </div>
            <Skills />
          </div>
        </PagesLayout>
      </>
    )
  }
}

export default AboutPage