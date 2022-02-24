import React from "react";
import { Table } from "antd";
import { Builder } from "@builder.io/react";

function JokesTable(props) {
  return <Table dataSource={props.list} columns={props.columns} />;
}

export default JokesTable;

Builder.registerComponent(JokesTable, {
  name: "Jokes Table",
  inputs: [
    {
      name: "dataSource",
      type: "list",
      defaultValue: [
        {
          categories: "animal",
          value:
            "Chuck Norris does not own a house. He walks into random houses and people move.",
        },
        {
          categories: "party",
          value:
            "On his birthday, Chuck Norris randomly selects one lucky child to be thrown into the sun.",
        },
      ],
    },
    {
      name: "columns",
      type: "list",
      defaultValue: [
        {
          title: "Joke",
          dataIndex: "value",
          key: "value",
        },
        {
          title: "Categoría",
          dataIndex: "categories",
          key: "categories",
        },
      ],
    },
  ],
});
