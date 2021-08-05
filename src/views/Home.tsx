import "./Home.css"
import React from "react";

export default class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {isMuted: true}
    this.muteBtuHandle = this.muteBtuHandle.bind(this)
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
    return (
      <div>
        <div className={"videoHeader"}>
          <div className={"headerContent"}>
            <h1 className={"header"}>
              欢迎加入我们的团队，一起学习
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
                <source src="/assets/Av42322248.mp4"
                        type="video/mp4"/>
              </video>`
            }}/>
          </div>
        </div>
        <section className={"aboutContent"}>
          <h2>
            我们的目标
          </h2>
          <blockquote>
            以赛促学，学以养赛
          </blockquote>

        </section>
        <section className={"portfolio"}>

        </section>

      </div>
    )
  }
}
