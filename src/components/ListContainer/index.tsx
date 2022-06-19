import React from "react";
import {useProvider} from "../../Provider";
import ToDoList from "../ToDoList";
import {Typography} from "antd";

const { Title } = Typography;

const ListContainer = () => {
  const { todos  } = useProvider();

  if (!todos.length) return <Title level={4}>Add first task...</Title>;

  return (
    <>
      {todos.some(item => !item.checked) && <ToDoList/>}
      {
        todos.some(item => item.checked) && (
          <>
            <Title level={3} className={"done-title"}>Done</Title>
            <ToDoList isDone/>
          </>
        )
      }
    </>
  )
};

export default ListContainer;