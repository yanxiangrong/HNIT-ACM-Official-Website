import {Button, Form, Input} from "antd";
import React, {useState} from "react";

function Admin() {
  const [loading, setLoading] = useState(false)

  const url = "/api/extract"
  const onFinish = (values: FormData) => {
    setLoading(true)
    let jsonString = JSON.stringify(values)
    console.log('upload:', jsonString);
    fetch(url, {method: "post", body: jsonString})
      .then(response => {
        if (response.status === 200) {
          console.log(response)
          return response.blob().then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            console.log(response.headers)
            let string = response.headers.get('Content-Disposition')
            let filename;
            if (string == null) {
              filename = new Date().getTime().toString()
            } else {
              filename = string.split(';')[1].split('=')[1];
            }
            a.download = filename
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();
            a.remove();  //afterwards we remove the element again
            setLoading(false)
          })
        }
        setLoading(false)
      }).catch(reason => {
      console.log(reason)
      setLoading(false)
    })
  };

  return (
    <div>
      <div className={"navBarBg"}/>
      <div className={"timeline"}>
        <h1>下载报名表</h1>
        <div className={"form"}>
          <Form name="basic" labelCol={{span: 8}} wrapperCol={{span: 16}} initialValues={{remember: true}}
                onFinish={onFinish}>

            <Form.Item label="提取码" name="password" rules={[{required: true}]}>
              <Input.Password style={{width: "20em"}}/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
              <Button type="primary" htmlType="submit" loading={loading}>
                下载
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Admin;