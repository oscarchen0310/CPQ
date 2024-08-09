// src/components/StepOne.jsx
import React from 'react';
import { Checkbox, InputNumber, Form } from 'antd';

const StepOne = () => {
  // Form handler to handle form submission
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div>
      <Form
        name="stepOneForm"
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          name="checkbox1"
          valuePropName="checked"
        >
          <Checkbox>Checkbox 1</Checkbox>
        </Form.Item>
        <Form.Item
          name="checkbox2"
          valuePropName="checked"
        >
          <Checkbox>Checkbox 2</Checkbox>
        </Form.Item>
        <Form.Item
          name="numberInput"
          label="Enter a number"
          rules={[{ required: true, message: 'Please enter a number!' }]}
        >
          <InputNumber placeholder="Enter a number" style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default StepOne;

