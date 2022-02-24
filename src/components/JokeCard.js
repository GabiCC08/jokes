import React from "react";
import { Card } from "antd";
import { Builder } from "@builder.io/react";

function JokeCard(props) {
  return <Card>{props.joke}</Card>;
}

export default JokeCard;

Builder.registerComponent(JokeCard, {
  name: "Joke Card",
  inputs: [
    {
      name: "joke",
      type: "string",
      defaultValue: "Here there is a joke",
    },
  ],
});
