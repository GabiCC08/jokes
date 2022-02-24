import React from "react";
import { Select, Form, Button } from "antd";
import { Builder } from "@builder.io/react";

function CategorySelector(props) {
  return (
    <>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={props.onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Categorías"
          name="category"
          rules={[{ required: true, message: "Por favor elige una" }]}
        >
          <Select>
            {props.categories
              ? props.categories.map((category, index) => (
                  <Select.Option value={category} key={index}>
                    {category}
                  </Select.Option>
                ))
              : null}
          </Select>
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

export default CategorySelector;

Builder.registerComponent(
  CategorySelector,
  {
    name: "Selector",
    inputs: [
      {
        name: "onFinish",
        type: "string",
      },
    ],
  },
  {
    name: "categories",
    type: "list",
    defaultValue: [
      "animal",
      "career",
      "celebrity",
      "dev",
      "explicit",
      "fashion",
      "food",
      "history",
      "money",
      "movie",
      "music",
      "political",
      "religion",
      "science",
      "sport",
      "travel",
    ],
  }
);
