import {Button, Checkbox, List, Space, Typography} from "antd"
import {DeleteFilled} from '@ant-design/icons';
import React from "react";
import {TodoType} from "../../types";

const { Title, Text } = Typography;

interface Props {
  data: TodoType;
  statusHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
}

const ToDoItem: React.FC<Props> = ({data: {date, title, checked, id}, statusHandler, deleteHandler}) => {
  return (
    <List.Item
      actions={[
        <Button
          type={"primary"}
          size={"large"}
          icon={<DeleteFilled />}
          onClick={() => deleteHandler(id)}
        />
      ]}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <Space direction={"horizontal"} align={"baseline"} size={30}>
          <Checkbox checked={checked} onChange={() => statusHandler(id)} />
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