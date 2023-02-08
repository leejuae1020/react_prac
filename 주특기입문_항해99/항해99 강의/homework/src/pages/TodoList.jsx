import React from "react";
import Layout from "component/layout/Layout";
import Header from "component/header/Header";
import Form from "component/form/Form";
import List from "../components/list/List";

function TodoList() {
  return (
    <div>
      <Layout>
        <Header />
        <Form />
        <List />
      </Layout>
    </div>
  );
}

export default TodoList;
