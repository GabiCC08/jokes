import React, { useEffect, useState } from "react";
import { Row, Col, Layout } from "antd";
import "antd/dist/antd.min.css";
import axios from "axios";
import CategorySelector from "./CategorySelector";
import InputSearch from "./InputSearch";
import JokeCard from "./JokeCard";
import JokesTable from "./JokesTable";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-grids";

function JokesPage() {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [list, setList] = useState([]);

  const columns = [
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
  ];

  useEffect(() => {
    const getJoke = async () => {
      const result = await axios.get("https://api.chucknorris.io/jokes/random");
      setJoke(result.data.value);
    };
    getJoke();
    const getCategories = async () => {
      const result = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      setCategories(result.data);
      console.log(result.data);
    };
    getCategories();
  }, []);

  const onFinish = (values) => {
    const getJoke = async () => {
      const result = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${values.category}`
      );
      setJoke(result.data.value);
    };
    getJoke();
  };

  const onFinish2 = (values) => {
    const getList = async () => {
      const result = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=${values.query}`
      );
      setList(result.data.result);
      console.log(result.data.result);
    };
    getList();
  };

  return (
    <>
      <Layout className="App">
        <h1>Chuck Norris Jokes</h1>
        <Row justify="space-around" align="top">
          <Col xs={22} sm={20} md={10}>
            <CategorySelector categories={categories} onFinish={onFinish} />
            <JokeCard joke={joke} />
          </Col>
          <Col xs={22} sm={20} md={10}>
            <InputSearch onFinish={onFinish2} />
            {list ? <JokesTable list={list} columns={columns} /> : null}
          </Col>
        </Row>
      </Layout>
      <div className="control-pane">
        <div className="control-section">
          <GridComponent dataSource={list} height="350">
            <ColumnsDirective>
              <ColumnDirective
                field="id"
                headerText="Joke ID"
                width="120"
                textAlign="Right"
              ></ColumnDirective>
              <ColumnDirective
                field="value"
                headerText="Joke"
                width="150"
              ></ColumnDirective>
              <ColumnDirective
                field="created_at"
                headerText="Create At"
                width="130"
                format="yMd"
                textAlign="Right"
              />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div>
    </>
  );
}

export default JokesPage;
