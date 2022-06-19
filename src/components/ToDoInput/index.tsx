import {Button, Form, Input, InputRef} from "antd";
import React, {FC, useEffect, useRef} from "react";
import {useProvider} from "../../Provider";
import {validationRules} from "../../utils/helpers";

const ToDoInput: FC = () => {
  const { addTodo  } = useProvider();
  const inputRef = useRef<InputRef>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [inputRef.current])

  const onFinish = (value: {todo: string}) => {
    form.resetFields();
    addTodo(value.todo);
  }

  return (
    <Form
      form={form}
      size={"large"}
      layout={"inline"}
      onFinish={onFinish}
      initialValues={{todo: ''}}
    >
      <Form.Item
        name={"todo"}
        className={"input"}
        rules={[ ...validationRules ]}>
        <Input placeholder={"new task"} ref={inputRef} allowClear />
      </Form.Item>
      <Form.Item className={"submit-btn"}>
        <Button size={"large"} type={"primary"} htmlType={"submit"}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default ToDoInput;