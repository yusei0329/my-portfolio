import React from "react"
import PagesLayout from "../components/pages-layout"


class AboutPage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <PagesLayout title={"About Me"}>
          <h1>丹羽佑成 / Yusei Niwa</h1>
        </PagesLayout>
      </div>
    )
  }
}


export default AboutPage