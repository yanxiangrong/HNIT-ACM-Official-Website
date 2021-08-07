import {Button, Form, Input} from "antd";
import React from "react";

function Admin() {
  const url = "http://192.168.1.118:8000/downlaod"
  const onFinish = (values: any) => {
    let json = JSON.stringify(values);
    fetch(url, {method: "post", body: json})
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "filename.xlsx";
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();
        a.remove();  //afterwards we remove the element again
      })
      .catch(reason => {
        console.log(reason)
      })
  };

  return (
    <div>
      <div className={"navBarBg"}/>
      <div className={"timeline"}>
        <h1>下载报名表</h1>
        <Form
          name="basic"
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          initialValues={{remember: true}}
          onFinish={onFinish}
        >

          <Form.Item
            label="提取码"
            name="password"
            rules={[{required: true}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">
              下载
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Admin;