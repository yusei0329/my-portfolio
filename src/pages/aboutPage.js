import React from "react"
import PagesLayout from "../components/pages-layout"
import Skills from "../components/skills"
import { Link } from "gatsby"
import "../styles/about-page.css"
import { AiOutlineGithub, AiOutlineMail, AiOutlineRollback } from "react-icons/ai";
import "../styles/reset.css"

class AboutPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const introduction = "大学ではプログラミングから映像製作, CGなど幅広い分野について学んだ. その中でプログラミングは一番力を入れた. 大学の友人やSNSで集まったメンバーでハッカソン等に出場し, 自身のスキルを磨いた. ハッカソンでは主にフロントエンドを担当することが多かった.";
    const part = "また, 大学一年次にはkicks（中央出版  ロボット科学教育）でプログラミング教室の講師としてのアルバイトをしていた. 大学三年次には大学主催のAITカレッジと言うプログラミング教室に補助講師として三回ほど参加した. 子供たちにプログラミングの楽しさを伝えることができる良い経験であった.";
    const summary = "現在は大学教授である水野慎士先生のCGメディア研究室に所属. 研究室ではCG, 画像処理, インタラクション, デジタルコンテンツなどをキーワードに研究と制作を行っている.";
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
                  <a href="http://aitech.ac.jp/cgmedia/" target="_blank" rel="noreferrer">
                    CGメディア研究室
                  </a>
                </td>
              </tr>
              <tr>
                <th>
                  <p className="mail-icon-text"><AiOutlineGithub size="1.5rem" /></p>
                </th>
                <td>
                  <a href="https://github.com/yusei0329" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </td>
              </tr>
              <tr>
                <th>
                  <p className="mail-icon-text"><AiOutlineMail size="1.5rem" /></p>
                </th>
                <td>
                  <a href="mailto:nwys.28@gmail.com">
                    nwys.28@gmail.com
                  </a>
                </td>
              </tr>
            </table>
            <div className="introduction-text">
              <p>{introduction}</p>
              <p>{part}</p>
              <p>{summary}</p>
            </div>
            <div className="skills-h1">
              <h1 >Skills</h1>
            </div>
            <Skills />
            <Link className="home-link-text" to="/">
              <p><AiOutlineRollback size="3rem" /></p>
            </Link>
          </div>
        </PagesLayout>
      </>
    )
  }
}

export default AboutPage