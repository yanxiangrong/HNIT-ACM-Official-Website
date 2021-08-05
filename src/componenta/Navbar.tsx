import "./Navbar.css"
import React from "react";
import Logo from "../assets/hnit-acm-logo-left-right.png"

interface menuItem {
  name: string
  href: string
}

export class Navbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.scrollHandler = this.scrollHandler.bind(this)
    this.state = {navBarCor: "#FFFFFF00"}
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  last_known_scroll_position = 0;
  ticking = false;


  scrollHandler() {
    this.last_known_scroll_position = window.scrollY;
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        // console.log(this.last_known_scroll_position)
        if (this.last_known_scroll_position < 200) {
          this.setState({navBarCor: "#FFFFFF00"})
        } else {
          this.setState({navBarCor: "#2E2E2EFF"})
        }
        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  render() {
    const {navBarCor} = this.state
    const menuItems: menuItem[] = [
      {name: "主页", href: "/"},
      {name: "加入我们", href: "/"},
      {name: "基地", href: "/"},
      {name: "照片墙", href: "/"},
      {name: "关于", href: "/"}]
    const menu = menuItems.map((item) => {
      return (
        <li key={item.name} className={"navBar-menu-item"}>
          <a className={"navBar-menu-link"} href={item.href}>{item.name}</a>
        </li>
      )
    })
    return (
      <nav className={"navBar"} style={{backgroundColor: navBarCor}}>
        <header className={"navBar-header"}>
          <div className={"navBar-left"}>
            <a className={"navBar-logo-link"} href={"/"}>
              <img className={"navBar-logo"} src={Logo} alt={"HNIT-ACM"}/>
              <title className={"navBar-logo-title"}>HNIT-ACM</title>
            </a>
          </div>
          <ul className={"navBar-right navBar-menu"}>{menu}</ul>
        </header>
      </nav>
    )
  }
}

export default Navbar;