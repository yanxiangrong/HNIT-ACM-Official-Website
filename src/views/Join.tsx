import bgPic from "../assets/background1.png"
import "./Join.css"
import {Alert, Button, Form, Input, Modal, Select} from "antd";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

const {Option} = Select;

function Join() {
  const history = useHistory();
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [error, setError] = useState("");
  const url = "/api/join"
  const pingUrl = "/api/ping"

  const pingBackend = (() => {
    fetch(pingUrl, {method: "get"}).then(() => {
      setIsDisable(false)
    })
    return null
  })
  pingBackend()

  const onFinish = (values: FormData) => {
    console.log('upload:', values);
    setLoading(true);
    let json = JSON.stringify(values);
    fetch(url, {method: "post", body: json}).then(
      r => {
        console.log(r)
        setLoading(false);
        if (r.status === 200) {
          return r.json().then(json => {
            history.push({
              pathname: "/result",
              state: {status: "success", title: "提交成功！", subTitle: JSON.stringify(json)}
            })
          })
        } else {
          return r.json().then(json => {
            setIsModalVisible(true)
            setError(JSON.stringify(json))
          })
        }
      }
    ).catch(reason => {
      console.log(reason)
      setLoading(false);
      setIsModalVisible(true)
      setError(reason.toString())
    })
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      <Modal title="提交失败" visible={isModalVisible} onCancel={handleCancel} footer={
        <Button key="ok" onClick={handleCancel}>
          确定
        </Button>}>
        <code>{error}</code>
      </Modal>
      <div className={"picBack"}>
        <img className={"bgPic"} src={bgPic} alt={""}/>
        <h1 className={"pageTitle"}>
          报名表
        </h1>
      </div>
      <div className={"joinContent"}>
        <div className={"alert"}>
          {
            isDisable &&
            <Alert message="暂时无法报名" type="error"/>
          }
        </div>
        <div className={"form"}>
          <Form labelCol={{span: 8}} wrapperCol={{span: 16}}
                initialValues={{remember: true}} onFinish={onFinish}>
            <Form.Item label={"分组"} name={"group"}
                       rules={[{required: true, message: "请填写你要加入的组！"}]}>
              <Select showSearch placeholder="选择你要加入的组" style={{width: 180}} disabled={isDisable}
                      optionFilterProp="children">
                {groups}
              </Select>
            </Form.Item>
            <Form.Item label={"姓名"} name={"name"}
                       rules={[{required: true, message: "请填写你的姓名！"}]}>
              <Input style={{width: 180}} disabled={isDisable}/>
            </Form.Item>
            <Form.Item label={"性别"} name={"sex"}
                       rules={[{required: false, message: "请填写你的姓别！"}]}>
              <Select showSearch placeholder="选择你的性别" style={{width: 180}} disabled={isDisable}
                      optionFilterProp="children">
                <Option value={"男"}>男</Option>
                <Option value={"女"}>女</Option>
              </Select>
            </Form.Item>
            <Form.Item label={"学院"} name={"series"}
                       rules={[{required: true, message: "请填写你的学院！"}]}>
              <Select showSearch placeholder="选择你所属的学院" style={{width: 200}} disabled={isDisable}
                      optionFilterProp="children">
                {series}
              </Select>
            </Form.Item>
            <Form.Item label={"专业"} name={"major"}
                       rules={[{required: true, message: "请填写你的专业！"}]}>
              <Input placeholder={"全称：物联网工程"} style={{width: 180}} disabled={isDisable}/>
            </Form.Item>
            <Form.Item label={"班级"} name={"classes"}
                       rules={[{required: true, message: "请填写你的班级！"}]}>
              <Select showSearch placeholder="选择你的班级" style={{width: 180}} disabled={isDisable}
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
              <Input style={{width: 180}} disabled={isDisable}/>
            </Form.Item>
            <Form.Item label={"QQ号"} name={"qqNum"}
                       rules={[{required: true, message: "我们需要你的QQ号才能联系你！"}]}>
              <Input style={{width: 180}} disabled={isDisable}/>
            </Form.Item>
            <Form.Item label={"手机号"} name={"phoneNum"}
                       rules={[{required: true, message: "我们需要你的手机号才能联系你！"}]}>
              <Input style={{width: 180}} disabled={isDisable}/>
            </Form.Item>
            <Form.Item labelCol={{span: 8}} wrapperCol={{span: 24}} label={"自我简介"} name={"introduction"}
                       rules={[{required: false, message: "自我简介能为你增加面试竞争力！"}]}>
              <Input.TextArea
                placeholder="自我简介能为你增加面试竞争力"
                autoSize={{minRows: 3, maxRows: 15}}
                style={{width: "80vw", maxWidth: 680}}
                disabled={isDisable}
              />
            </Form.Item>
            <Form.Item wrapperCol={{span: 16}} style={{textAlign: "center"}}>
              <Button type="primary" htmlType="submit" loading={loading} disabled={isDisable}>
                提交
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div style={{marginTop: "120px"}}>
        <p>
          对新同学：提交报名表后请加入QQ群，以免错过重要消息。
        </p>
        <p>
          对管理员：在<a target={"_blank"} href={"/admin"} rel={"noreferrer"}>此链接</a>可以下载报名表。
        </p>
      </div>
      {/*<Redirect to={{pathname: "/result", state: {status: "success", title: "提交成功！"}}}/>*/}
    </div>
  )
}

export default Join;