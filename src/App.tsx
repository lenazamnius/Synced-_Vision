import {Col, Divider, Layout, Row, Typography} from "antd";
import React, {useEffect, useState} from 'react';
import {TodoType} from "./types";
import ToDoList from "./components/ToDoList";
import {createTodoObj, getSavedTodos, updateTodos} from "./helpers";
import ToDoInput from "./components/ToDoInput";
import './App.css';

const { Title } = Typography;
const {  Content } = Layout;

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>(() => getSavedTodos());

  useEffect(() => {
    updateTodos(todos);
  }, [todos])

  const setNewTodo = (value: string) => {
    setTodos((prev) => [
        ...prev,
        createTodoObj(value),
      ]
    );
  }

  const handleStatus = (id: string) => {
    setTodos((prev) => prev.map(item => {
      return item.id === id ? {
        ...item,
        checked: !item.checked
      } : item
    }));
  }

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter(item => item.id !== id))
  }

  return (
    <Layout style={{minHeight: '100vh', padding: '200px 0', background: '#fff'}}>
      <Content>
        <Row justify={"center"} align={"middle"}>
          <Col xs={20} lg={16} xl={9}>
            <Title>Todolist App</Title>
            <ToDoInput handleSetNewTodo={setNewTodo} />
            <Divider />
            {
              todos.length
                ? <ToDoList listData={todos} statusHandler={handleStatus} deleteHandler={handleDelete} />
                : <Title level={4}>Add todo task...</Title>
            }
            {
              todos.some(item => item.checked) && (
                <>
                  <Title level={2} style={{ marginTop: '25px'}}>Done</Title>
                  <ToDoList listData={todos} statusHandler={handleStatus} deleteHandler={handleDelete} isDone/>
                </>
              )
            }
          </Col>
        </Row>
        </Content>
    </Layout>
  );
}

export default App;
