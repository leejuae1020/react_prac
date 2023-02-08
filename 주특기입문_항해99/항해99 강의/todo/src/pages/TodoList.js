import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

function TodoList() {
    // 자식컴포넌트들끼리의 정보 교환을 위해 공통된 상위 컴포넌트인 TodoList에서 넘겨줄 useState 선언(포장지라고 생각하기)
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "REACT",
            body: "최고인데 어려움",
            isDone: false,
        },
        {
            id: 2,
            title: "JS공부하기",
            body: "근본인녀석",
            isDone: true,
        },
    ]);

    return (
        <Layout>
            <Header />
            <Form todos={todos} setTodos={setTodos} />
            <List todos={todos} setTodos={setTodos} />
        </Layout>
    );
}
export default TodoList;
