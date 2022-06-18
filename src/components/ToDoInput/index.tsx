import {Button, Form, Input, InputRef} from "antd";
import React, {useEffect, useRef} from "react";

interface Props {
  handleSetNewTodo: (value: string) => void
}

const ToDoInput: React.FC<Props> = ({handleSetNewTodo}) => {
  const [form] = Form.useForm();
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [inputRef.current])

  const onFinish = (value: {todo: string}) => {
    form.resetFields();
    handleSetNewTodo(value.todo);
  }

  return (
    <Form
      size="large"
      layout="inline"
      form={form}
      onFinish={onFinish}
      initialValues={{todo: ''}}
    >
      <Form.Item
        name="todo"
        rules={[
          {
            required: true,
            message: 'Please input new todo!'
          }, {
            pattern: new RegExp('^.*[a-zA-Zа-яА-Я]+.*$'),
            message: "Can not contain only digits",
          }, {
            min: 3,
            message: "Must be at least 3 characters long",
          }
        ]}
        style={{ flexGrow: 1 }}
      >
        <Input placeholder="new task" ref={inputRef} allowClear />
      </Form.Item>
      <Form.Item style={{ marginRight: 0 }}>
        <Button size="large" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default ToDoInput;