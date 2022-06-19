import {Col, Divider, Layout, Row, Typography} from "antd";
import React from 'react';
import ToDoInput from "./components/ToDoInput";
import ListContainer from "./components/ListContainer";
import './app.css'

const { Title } = Typography;
const {  Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className={"layout"}>
      <Content>
        <Row justify={"center"} align={"middle"}>
          <Col xs={20} lg={16} xl={9}>
            <Title>Todolist App</Title>
            <ToDoInput />
            <Divider />
            <ListContainer/>
          </Col>
        </Row>
        </Content>
    </Layout>
  );
}

export default App;
