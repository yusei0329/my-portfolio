import React from "react"
import PagesLayout from "../components/pages-layout"
import Skills from "../components/skills";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <PagesLayout title={"About Me"}>
          <h1>丹羽佑成 / Yusei Niwa</h1>
          <table className="about-table">
            <tr>
              <th>年齢</th>
              <td>20</td>
            </tr>
            <tr>
              <th>大学</th>
              <td>愛知工業大学</td>
            </tr>
            <tr>
              <th>所属</th>
              <td>CGメディア研究室</td>
            </tr>
          </table>
          <h1>Skills</h1>
          <Skills />
        </PagesLayout>
      </div>
    )
  }
}

export default AboutPage