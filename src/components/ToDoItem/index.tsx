import {Button, Checkbox, List, Space, Typography} from "antd"
import {DeleteFilled} from '@ant-design/icons';
import React from "react";
import {useProvider} from "../../Provider";
import {TodoType} from "../../Provider/types";

const {Title, Text} = Typography;

interface Props {
  data: TodoType;
}

const ToDoItem: React.FC<Props> = ({ data: { date, title, checked, id}}) => {
  const {deleteTodo, handleStatus} = useProvider();

  return (
    <List.Item
      actions={[
        <Button
          size={"large"}
          type={"primary"}
          icon={<DeleteFilled/>}
          onClick={() => deleteTodo(id)}
        />
      ]}
    >
      <div className={"item-inner"}>
        <Space direction={"horizontal"} align={"baseline"} size={30}>
          <Checkbox checked={checked} onChange={() => handleStatus(id)}/>
          <Title
            level={5}
            delete={checked}
            disabled={checked}>
            {title}
          </Title>
        </Space>
        <Text type={"secondary"}>{date}</Text>
      </div>
    </List.Item>
  )
}

export default ToDoItem;