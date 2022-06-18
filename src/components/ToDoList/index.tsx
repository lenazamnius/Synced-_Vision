import {List} from "antd";
import React from "react";
import ToDoItem from "../ToDoItem";
import {TodoType} from "../../types";

interface Props {
  listData: TodoType[],
  statusHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
  isDone?: boolean,
}

const ToDoList: React.FC<Props> = ({
   listData,
   statusHandler,
   deleteHandler,
   isDone = false
}) => {
  return (
    <List
        bordered
        itemLayout="horizontal"
        dataSource={listData}
        renderItem={item => (isDone === item.checked && <ToDoItem key={item.id} data={item} statusHandler={statusHandler} deleteHandler={deleteHandler} />)}
    />
  )
};

export default ToDoList;