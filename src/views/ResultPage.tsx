import React from "react";
import {useLocation} from "react-router-dom";
import {Result, Button} from "antd";
import { ResultStatusType } from "antd/lib/result";
import "./ResultPage.css"

interface State {
  status: ResultStatusType
  title: string
}

export default function ResultPage() {
  const {state} = useLocation<State>();
  // console.log(state)
  return (
    <div>
      <div className={"navBarBg"}/>
      <Result style={{marginTop: "140px"}}
              status= {state.status}
              title= {state.title}
              extra={[
                <Button type="primary" key={"home"} href={"/"}>
                  返回主页
                </Button>,
              ]}
      />
    </div>

  );
}