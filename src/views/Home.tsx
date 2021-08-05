import "./Home.css"

function Home() {
  return (
    <div style={{zIndex: 0, height: 2000, position: "absolute", width: "100%"}}>
      <div className={"videoHeader"}>
        <div className={"headerContent"}>
          <h1 className={"header"}>
            欢迎加入我们的团队，一起学习
          </h1>
        </div>
        <div className={"videoBackground"}>
          <video className={"videoLoop"} autoPlay muted playsInline loop>
            <source src={"/assets/How-will-Artificial-Intelligence-and-Internet-of-Things-change-the-world.mp4"}
                    type={"video/mp4"}/>
          </video>
        </div>
      </div>
      <h1>
        aaa
      </h1>
    </div>
  )
}

export default Home;