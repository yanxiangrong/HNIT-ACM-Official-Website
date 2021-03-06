import "./Footer.css"
import QqOutlined from "@ant-design/icons/QqOutlined";
import GithubOutlined from "@ant-design/icons/GithubOutlined";
function Footer() {
  return (
    <div className={"footer"}>
      <h2 className={"footerHead"}>
        我们相信<br/>通过持续的学习，你终将成为大犇!
      </h2>
      <div className={"follow"}>
        <span className={"followText"}>FOLLOW US</span>
        <a className={"followLink"} rel={"noreferrer"} target={"_blank"}
           href={"https://jq.qq.com/?_wv=1027&k=S0zNYN1H"}>
          <QqOutlined className={"icon"}/>
        </a>
        <a className={"followLink"} rel={"noreferrer"} target={"_blank"}
           href={"https://github.com/hnit-acm"}>
          <GithubOutlined className={"icon"}/>
        </a>
      </div>
      <div className={"copyright"}>
        Designed By XiaoRong/Coodyz<br/>
        © 2020 - 2021 HNIT-ACM
      </div>
    </div>
  )
}

export default Footer;