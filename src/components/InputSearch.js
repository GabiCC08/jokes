import React from "react";
import { Form, Button, Input } from "antd";
import { Builder } from "@builder.io/react";

function InputSearch(props) {
  return (
    <>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={props.onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Palabra clave"
          name="query"
          rules={[{ required: true, message: "Por favor ingrese una palabra" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Buscar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default InputSearch;

Builder.registerComponent(InputSearch, {
  name: "Input Search",
  inputs: [
    {
      name: "onFinish",
      type: "string",
    },
  ],
});
