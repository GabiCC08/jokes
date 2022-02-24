import React, { useEffect, useState } from "react";
import { Row, Col, Layout } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import CategorySelector from "./CategorySelector";
import InputSearch from "./InputSearch";
import JokeCard from "./JokeCard";
import JokesTable from "./JokesTable";

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
  );
}

export default JokesPage;
