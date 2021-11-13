import React from "react";
import Circle from "react-circle";
import "../styles/skills.css"

const Skills = () => {
  const data = [
    { id: 1, name: 'javascript', num: 70},
    { id: 2, name: 'React.js', num: 60},
    { id: 3, name: 'GatsbyJS', num: 60 },
    { id: 4, name: 'C,C++', num: 60 },
    { id: 5, name: 'OpenCV', num: 30 },
    { id: 6, name: 'openFrameworks', num: 30 },
    { id: 7, name: 'Unity', num: 50 }
  ];

  return (
    <div>
      {<ul className="card">
          {data.map((value) =>
            <li className = "item">
              <p className = "ttl">{value.name}</p>
              <p className = "ttl">
                <Circle
                  progress={value.num}           //進捗率
                  size="100px"            //円グラフのサイズ
                  lineWidth="20px"        //円グラフの線幅
                  progressColor="black"    //進捗の色
                  bgColor="#f5f5f5"       //残部分の色
                  textColor="black"        //進捗文字の色
                />
              </p>
            </li>
          )}
      </ul>}
    </div>
  )
}


export default Skills