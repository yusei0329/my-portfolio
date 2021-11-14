import React from "react";
import Circle from "react-circle";
import "../styles/skills.css"

const Skills = () => {
  const data = [
    { name: 'javascript', num: 70},
    { name: 'React.js', num: 60},
    { name: 'Gatsby.js', num: 60 },
    { name: 'C,C++', num: 60 },
    { name: 'Flutter', num: 40 },
    { name: 'OpenCV', num: 40 },
    { name: 'Unity', num: 35 },
    { name: 'openFrameworks', num: 35 },
    { name: 'OpenGL', num: 35 },
    { name: 'After Effects', num: 35 },
    { name: 'Illustrator', num: 30 },
    { name: 'Photoshop', num: 20 },
  ];

  return (
    <>
      {<ul className = "card">
          {data.map((value) =>
            <li className = "item">
              <p className = "ttl">{value.name}</p>
              <p className = "ttl">
                <Circle
                  progress={value.num}    //進捗率       
                  size="100px"            //円グラフのサイズ
                  lineWidth="20px"        //円グラフの線幅
                  progressColor="black"   //進捗の色 
                  bgColor="#f5f5f5"       //残部分の色
                  textColor="black"       //進捗文字の色 
                />
              </p>
            </li>
          )}
      </ul>}
    </>
  )
}


export default Skills