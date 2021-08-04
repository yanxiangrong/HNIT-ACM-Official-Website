import "./Navbar.css"
import React from "react";

export class Navbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.scrollHandler = this.scrollHandler.bind(this)
    this.state = {navBarCor: "#fff"}
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
        console.log(this.last_known_scroll_position)
        if (this.last_known_scroll_position === 0) {
          this.setState({navBarCor: "#fff"})
        } else {
          this.setState({navBarCor: "#ef2528"})
        }
        this.ticking = false;
      });

      this.ticking = true;
    }
  }

  render() {
    const {navBarCor} = this.state
    return (
      <div className={"navBar"} style={{color: navBarCor}}>
        导航栏
      </div>
    )
  }
}

export default Navbar;