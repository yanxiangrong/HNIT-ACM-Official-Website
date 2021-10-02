import "./Home.css"
import React from "react";
import ClassroomTable from "../componenta/ClassroomTable";
import {Divider, Row, Col} from "antd"
import Pic22 from "../assets/22.png"
import Pic33 from "../assets/33.png"
import rewardTable from "../assets/Snipaste_2021-08-06_15-10-42.png"


interface State {
  isMuted: boolean
}

export default class Home extends React.Component<any, State> {
  private readonly textRef: any;

  constructor(props: any) {
    super(props)
    this.state = {isMuted: true}
    this.muteBtuHandle = this.muteBtuHandle.bind(this)
    this.textRef = React.createRef()
  }

  textAnimation() {
    const words = ["学习。", "写代码。", "交流。", "刷题。", "摸鱼。", "膜拜大佬。", "追逐梦想。", "自习。", "参加比赛。", "集训。"];
    let i = 0;
    const node = this.textRef.current;

    function typingEffect() {
      let word = words[i].split("");
      const loopTyping = function () {
        if (word.length > 0) {
          node.innerHTML += word.shift();
        } else {
          setTimeout(deletingEffect, 2000);
          return false;
        }
        setTimeout(loopTyping, 400);
      };
      loopTyping();
    }

    function deletingEffect() {
      let word = words[i].split("");
      const loopDeleting = function () {
        if (word.length > 0) {
          word.pop();
          node.innerHTML = word.join("");
        } else {
          if (words.length > (i + 1)) {
            i++;
          } else {
            i = 0;
          }
          setTimeout(typingEffect, 600)
          return false;
        }
        setTimeout(loopDeleting, 200);
      };
      loopDeleting();
    }

    typingEffect();
  }

  componentDidMount() {
    this.textAnimation()
  }

  muteBtuHandle() {
    let vid = (document.getElementById("video") as HTMLVideoElement);
    if (vid) {
      vid.muted = !this.state.isMuted;
      this.setState({isMuted: !this.state.isMuted})
      if (vid.paused) {
        vid.play().then(r => console.error(r))
      }
    }
  }

  render() {
    let videoUrls = ["/assets/Av42322248.mp4", "/assets/Av975686325.mp4"]
    let playVideoUrl: string
    if (Math.random() < 0.15) {
      playVideoUrl = videoUrls[1].toString()
    } else {
      playVideoUrl = videoUrls[0].toString()
    }

    return (
      <div>
        <div className={"videoHeader"}>
          <div className={"headerContent"}>
            <h1 className={"header"}>
              <div>
                欢迎<a href={"/join"} className={"navBar-menu-link"}>
                <span className={"underline"}>加入我们的团队</span>
              </a>，
              </div>
              <div>
                一起
                <span ref={this.textRef}/>
                <span className={"blinking-cursor"}/>
              </div>
            </h1>
          </div>
          <div className={"videoBackground"}>
            <div className={"speaker"} onClick={this.muteBtuHandle}>
              <span className={this.state.isMuted ? "speakerIcon mute" : "speakerIcon"}/>
            </div>
            <div dangerouslySetInnerHTML={{
              __html: `
              <style>
                .videoLoop {
                  position: absolute;
                  z-index: 2;
                  height: 100%;
                  width: 100%;
                  top: 0;
                  left: 0;
                  opacity: 60%;
                  object-fit: cover;
                }
              </style>
              <video id="video" class="videoLoop" autoPlay muted playsInline loop>
                <source src="` + playVideoUrl + `"
                        type="video/mp4"/>
              </video>`
            }}/>
          </div>
        </div>
        <div className={"paragraph"}>
          <section className={"aboutContent"}>
            <h2>
              我们的目标
            </h2>
            <blockquote>
              以赛促学，学以养赛
            </blockquote>

          </section>
          <Divider/>
          <section className={"portfolio"}>
            <h2>
              我们的基地
            </h2>
            <div className={"classroomTable"}>
              <div className={"moveTable"}>
                <ClassroomTable/>
              </div>
              <img className={"moveTablePic"} src={Pic22} alt={""}/>
            </div>
          </section>
          <Divider/>
          <section className={"portfolio"}>
            <h2>
              我们的分组
            </h2>
            <div className={"group"}>
              <img className={"tablePic"} src={Pic33} alt={""}/>
              <div className={"groupText"}>
                <p>
                  算法组：学习使用C、C++语言学习各种算法来解决算法问题，如搜索算法，排序算法，最优解算法。
                </p>
                <p>
                  机器人组：学习使用Python语言为NAO机器人编写程序，其中有机器人运动控制，计算机视觉，让机器人打高尔夫球和跑步。
                </p>
                <p>
                  软件组：学习使用各种前端及后端框架来开发应用，如微信小程序，WEB网站。
                </p>
                <p>
                  物联网实验室：学习使用Stm32，Arduino，树莓派等开发板设计一些作品，如智能花盆，智能停车场系统。
                </p>
                <p>
                  以上每个组都会组织暑假留校集训，并参加省赛。我们会集中请一年的晚自习的假。让同学们一起来学习。
                  除暑假省赛以外，平时各类比赛也可以参加，比赛成绩优秀者还可以获得外出旅游(晋级省赛、国赛)的机会。学校报销费用。
                </p>
                <p>
                  如果想学到更多的知识，可以在大学四年分阶段依次加入以上分组。比如此网站的作者，到目前为止以上分组均有过参与。
                </p>
              </div>
            </div>
          </section>
          <Divider/>
          <section className={"portfolio"}>
            <h2>
              学校的支持
            </h2>
            <div className={"group"}>
              <img className={"tableRewardPic"} src={rewardTable} alt={""}/>
              <div className={"groupText"}>
                <p>
                  除了提供教室、报销比赛费用外。学校还为该类比赛提供了丰厚的奖励。
                  这是一项新政策，有了这个政策，同学们比赛可以获得除了举办方的证书及奖品外，还可以直接获得学校的比赛奖励。
                  除此之外，参加比赛还能为你累积大量的素拓分和综测分，能为你获得奖学金增加巨大的优势。
                </p>
              </div>
            </div>
          </section>
          <Divider/>
          <section className={"portfolio"}>
            <h2>
              如何加入我们
            </h2>
            <Row gutter={24}>
              <Col span={24} md={12}>
                <h3 className={"abHead"}>
                  要求
                </h3>
                <div className={"groupText"}>
                  <p>
                    1. 不会就学，不懂就问，态度积极。<br/>
                    2. 面向大一，大二级的同学，专业，学院不限<br/>
                    3. 逻辑思维良好，吃苦耐劳，有团队荣誉感，服从管理。<br/>
                    4. 每天晚上的训练不能无故缺勤早退，若违反情况严重者，可考虑开除队籍。<br/>
                  </p>
                </div>
              </Col>
              <Col span={24} md={12}>
                <h3 className={"abHead"}>
                  选拔流程
                </h3>
                <div className={"groupText"}>
                  <p>
                    所有同学必须通过新生赛的选拔。
                  </p>
                  <p>
                    新生赛只主要考察C语言语法和基本算法，所以你得去自学C语言。QQ群里面的学长学姐都会愿意指导，要多到群里面提问。
                  </p>
                  <p>
                    下面提供一些刷题网站，希望大家能在新生赛之前好好磨练一下自己。
                  </p>
                  <div>
                    <a style={{color: "#32ffb9", fontSize: "18px"}} href={"https://www.luogu.org/"}>洛谷</a>
                    <a style={{color: "orangered", fontSize: "18px", marginLeft: "20px"}}
                       href={"https://acm.hdu.edu.cn/"}>HDUOJ</a>
                    <a style={{color: "#84ceff", fontSize: "18px", marginLeft: "20px"}}
                       href={"https://www.hnitoj.cn/"}>HNITOJ</a>
                  </div>
                  <p>
                    不同组的选拔方式略有不同。
                  </p>
                </div>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24} md={12}>
                <h3 className={"abHead"}>
                  联系方式
                </h3>
                <div className={"groupText"}>
                  <p>
                    交流Q群：<a target={"_blank"} rel={"noreferrer"} href={"https://jq.qq.com/?_wv=1027&k=S0zNYN1H"}
                            className={"QQ-link"}>
                    <span className={"underline"}>876077941</span>
                  </a>
                  </p>
                  <p>
                    欢迎大家进群讨论问题！
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </div>

      </div>
    )
  }
}
