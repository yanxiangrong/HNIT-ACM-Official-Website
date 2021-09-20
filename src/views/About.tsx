import React from "react";
import bgPic from "../assets/QQ20210806214458.jpg";
import "./About.css"
import {Avatar, Tag} from "antd";
import GithubOutlined from "@ant-design/icons/GithubOutlined";

interface Author {
  avatar: string
  github: string
  name: string
}

interface IState {
  leadAuthors: Author[]
  secondaryAuthors: Author[]
  otherAuthors: Author[]
}

export default class About extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {leadAuthors: [], secondaryAuthors: [], otherAuthors: []}
  }

  componentDidMount() {
    let token = "ghp_Nd5ZC1kzY5vJ9YIm" + "NAJ8w1evZ2LdWB1DQc88"
    let leadAuthorsLogin = [
      "yanxiangrong"
    ]

    let secondaryAuthorsLogin = [
      "dongzhiwei-git",
      "coolbreeze2",
      "nieaowei",
    ]

    let otherAuthorsLogin = [
      "yinrenxin",
      "Chris51498",
      "FYanesu",
      "jiajixiang",
      "Jourofant",
      "leoiwan",
      "lusshao",
      "Mrsssswan",
      "onionchanowo",
      "YaChenW",
    ]

    let leadAuthors: Author[] = [];
    leadAuthorsLogin.forEach((value) => {
      let url = "https://api.github.com/users/" + value
      fetch(url, {
        headers: {
          'Authorization': 'token ' + token,
        }
      })
        .then(r => r.json())
        .then(myJson => {
          let name = myJson["name"] == null ? myJson["login"] : myJson["name"]
          leadAuthors.push({
            avatar: myJson["avatar_url"],
            github: myJson["html_url"],
            name: name
          })
          this.setState({leadAuthors: leadAuthors})
        })
    })

    let secondaryAuthors: Author[] = [];
    secondaryAuthorsLogin.forEach((value) => {
      let url = "https://api.github.com/users/" + value
      fetch(url, {
        headers: {
          'Authorization': 'token ' + token,
        }
      })
        .then(r => r.json())
        .then(myJson => {
          let name = myJson["name"] == null ? myJson["login"] : myJson["name"]
          secondaryAuthors.push({
            avatar: myJson["avatar_url"],
            github: myJson["html_url"],
            name: name
          })
          this.setState({secondaryAuthors: secondaryAuthors})
        })
    })

    let otherAuthors: Author[] = [];
    otherAuthorsLogin.forEach((value) => {
      let url = "https://api.github.com/users/" + value
      fetch(url, {
        headers: {
          'Authorization': 'token ' + token,
        }
      })
        .then(r => r.json())
        .then(myJson => {
          let name = myJson["name"] == null ? myJson["login"] : myJson["name"]
          otherAuthors.push({
            avatar: myJson["avatar_url"],
            github: myJson["html_url"],
            name: name
          })
          this.setState({otherAuthors: otherAuthors})
        })
    })
  }

  render() {
    const {leadAuthors, secondaryAuthors, otherAuthors} = this.state

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
        <div>
          <h3>
            本项目已在 Github 上开源
          </h3>
          <a target={"_blank"} rel={"noreferrer"}
             href={"https://github.com/hnit-acm/HNIT-ACM-Official-Website"}>
            <Tag icon={<GithubOutlined/>} color="#24292E">
              HNIT-ACM-Official-Website
            </Tag>
          </a>
        </div>
      </div>
    );
  }
}