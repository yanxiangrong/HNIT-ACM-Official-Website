import React from "react";
import bgPic from "../assets/QQ20210806214458.jpg";
import "./About.css"
import {Avatar} from "antd";

interface Author {
  avatar: string
  github: string
  name: string
}

export default class About extends React.Component<any, any> {
  render() {
    const leadAuthors: Author[] = [{
      avatar: "https://avatars.githubusercontent.com/u/39958055?s=96&v=4",
      github: "https://github.com/yanxiangrong",
      name: "小荣"
    }]

    const secondaryAuthors: Author[] = [{
      avatar: "https://avatars.githubusercontent.com/u/60594407?s=96&v=4",
      github: "https://github.com/dongzhiwei-git",
      name: "dongzhiwei"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/43947544?s=96&v=4",
      github: "https://github.com/coolbreeze2",
      name: "coodyz"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/42961884?s=96&v=4",
      github: "https://github.com/nieaowei",
      name: "Nekilc"
    }]

    const otherAuthors: Author[] = [{
      avatar: "https://avatars.githubusercontent.com/u/20474807?s=96&v=4",
      github: "https://github.com/yinrenxin",
      name: "Joe"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/58461004?s=96&v=4",
      github: "https://github.com/Chris51498",
      name: "FreeWei"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/43956605?s=96&v=4",
      github: "https://github.com/FYanesu",
      name: "anesu"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/28760037?s=96&v=4",
      github: "https://github.com/jiajixiang",
      name: "jiajixiang"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/29854251?s=96&v=4",
      github: "https://github.com/Jourofant",
      name: "Jourofant"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/54177415?s=96&v=4",
      github: "https://github.com/leoiwan",
      name: "leoiwan"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/38729399?s=96&v=4",
      github: "https://github.com/lusshao",
      name: "lusshao"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/25981361?s=96&v=4",
      github: "https://github.com/Mrsssswan",
      name: "liwanfang"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/39485315?s=96&v=4",
      github: "https://github.com/onionchanowo",
      name: "onion"
    }, {
      avatar: "https://avatars.githubusercontent.com/u/38676076?s=96&v=4",
      github: "https://github.com/YaChenW",
      name: "BlaCat"
    }]

    const lead = leadAuthors.map((item) =>
      <li key={item.github} className={"user"}>
        <Avatar size="large" src={item.avatar}/>
        <a href={item.github} className={"userName"}>{item.name}</a>
      </li>
    )

    const secondary = secondaryAuthors.map((item) =>
      <li key={item.github} className={"user"}>
        <Avatar size="large" src={item.avatar}/>
        <a href={item.github} className={"userName"}>{item.name}</a>
      </li>
    )

    const other = otherAuthors.map((item) =>
      <li key={item.github} className={"user"}>
        <Avatar size="large" src={item.avatar}/>
        <a href={item.github} className={"userName"}>{item.name}</a>
      </li>
    )

    return (
      <div>
        <div className={"picBack"}>
          <img className={"bgPic"} src={bgPic} alt={""}/>
          <h1 className={"AboutPageTitle"}>
            ACM有你更精彩!
          </h1>
        </div>
        <h2 className={"thank"}>
          特别感谢
        </h2>
        <div>
          <h3>
            本站主要作者
          </h3>
          <ul className={"users"}>
            {lead}
          </ul>

        </div>
        <div>
          <h3>
            次要作者
          </h3>
          <ul className={"users"}>
            {secondary}
          </ul>

        </div>
        <div>
          <h3>
            其他大佬
          </h3>
          <ul className={"users"}>
            {other}
          </ul>
        </div>
      </div>
    );
  }
}