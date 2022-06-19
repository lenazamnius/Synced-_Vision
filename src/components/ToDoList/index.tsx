import {List} from "antd";
import React from "react";
import {useProvider} from "../../Provider";
import ToDoItem from "../ToDoItem";

interface Props {
  isDone?: boolean;
}

const ToDoList: React.FC<Props> = ({ isDone = false }) => {
  const { todos  } = useProvider();

  return (
    <List
      bordered
      dataSource={todos}
      renderItem={ item => (isDone === item.checked && <ToDoItem key={item.id} data={item} />)}
      itemLayout={"horizontal"}
    />
  )
};

export default ToDoList;