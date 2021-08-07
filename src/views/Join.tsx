import bgPic from "../assets/background1.png"
import "./Join.css"
import {Button, Form, Input, Select} from "antd";
import React from "react";
import {useHistory} from "react-router-dom";

const {Option} = Select;

function Join() {
  const history = useHistory();
  const url = "http://192.168.1.118:8000/join"

  const onFinish = (values: FormData) => {
    console.log('Success:', values);
    let json = JSON.stringify(values);
    fetch(url, {method: "post", body: json}).then(
      r => {
        console.log(r)
        history.push({pathname: "/result", state: {status: "success", title: "提交成功！"}})
      }
    ).catch(reason => {
        console.log(reason)
    })
  };


  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const seriesList: string[] = ["智能制造与机械工程学院", "材料科学与工程学院", "安全与管理工程学院", "电气与信息工程学院",
    "化学与环境工程学院", "计算机科学与工程学院", "理学院", "商学院", "设计艺术学院", "土木与建筑工程学院", "外国语学院", "马克思主义学院"]
  const series = seriesList.map((item) =>
    <Option key={item} value={item}>{item}</Option>
  )
  const groupsList: string[] = ["算法组", "机器人组", "软件组"]
  const groups = groupsList.map((item) =>
    <Option key={item} value={item}>{item}</Option>
  )

  return (
    <div>
      <div className={"picBack"}>
        <img className={"bgPic"} src={bgPic} alt={""}/>
        <h1 className={"pageTitle"}>
          报名表
        </h1>
      </div>
      <div className={"form"}>
        <Form labelCol={{span: 8}} wrapperCol={{span: 16}}
              initialValues={{remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item label={"分组"} name={"group"}
                     rules={[{required: true, message: "请填写你要加入的组！"}]}>
            <Select showSearch placeholder="选择你要加入的组" style={{width: 180}}
                    optionFilterProp="children">
              {groups}
            </Select>
          </Form.Item>
          <Form.Item label={"姓名"} name={"name"}
                     rules={[{required: true, message: "请填写你的姓名！"}]}>
            <Input style={{width: 180}}/>
          </Form.Item>
          <Form.Item label={"性别"} name={"sex"}
                     rules={[{required: false, message: "请填写你的姓别！"}]}>
            <Select showSearch placeholder="选择你的性别" style={{width: 180}}
                    optionFilterProp="children">
              <Option value={"男"}>男</Option>
              <Option value={"女"}>女</Option>
            </Select>
          </Form.Item>
          <Form.Item label={"学院"} name={"series"}
                     rules={[{required: true, message: "请填写你的学院！"}]}>
            <Select showSearch placeholder="选择你所属的学院" style={{width: 200}}
                    optionFilterProp="children">
              {series}
            </Select>
          </Form.Item>
          <Form.Item label={"专业"} name={"major"}
                     rules={[{required: true, message: "请填写你的专业！"}]}>
            <Input placeholder={"全称：物联网工程"} style={{width: 180}}/>
          </Form.Item>
          <Form.Item label={"班级"} name={"classes"}
                     rules={[{required: true, message: "请填写你的班级！"}]}>
            <Select showSearch placeholder="选择你的班级" style={{width: 180}}
                    optionFilterProp="children">
              <Option value={"1"}>1班</Option>
              <Option value={"2"}>2班</Option>
              <Option value={"3"}>3班</Option>
              <Option value={"4"}>4班</Option>
              <Option value={"5"}>5班</Option>
            </Select>
          </Form.Item>
          <Form.Item label={"学号"} name={"studentNum"}
                     rules={[{required: true, message: "请填写你的学号！"}]}>
            <Input style={{width: 180}}/>
          </Form.Item>
          <Form.Item label={"QQ号"} name={"qqNum"}
                     rules={[{required: true, message: "我们需要你的QQ号才能联系你！"}]}>
            <Input style={{width: 180}}/>
          </Form.Item>
          <Form.Item label={"手机号"} name={"phoneNum"}
                     rules={[{required: true, message: "我们需要你的手机号才能联系你！"}]}>
            <Input style={{width: 180}}/>
          </Form.Item>
          <Form.Item labelCol={{span: 8}} wrapperCol={{span: 24}} label={"自我简介"} name={"introduction"}
                     rules={[{required: false, message: "我们需要你的手机号才能联系你！"}]}>
            <Input.TextArea
              placeholder="自我简介能为你增加面试竞争力"
              autoSize={{minRows: 3, maxRows: 15}}
              style={{width: "80vw", maxWidth: 680}}
            />
          </Form.Item>
          <Form.Item wrapperCol={{span: 16}} style={{textAlign: "center"}}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/*<Redirect to={{pathname: "/result", state: {status: "success", title: "提交成功！"}}}/>*/}
    </div>
  )
}

export default Join;