import "./Home.css"

function Home() {
  return (
    <div>
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
      <h1 style={{height: "800px"}}>
        aaa
      </h1>
    </div>
  )
}

export default Home;