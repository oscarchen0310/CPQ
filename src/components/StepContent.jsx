// src/components/StepContent.jsx
import React from 'react';
import { Checkbox, InputNumber } from 'antd';

const StepContent = ({ step }) => (
  <div>
    <Checkbox>{step.checkboxLabel}</Checkbox>
    <InputNumber placeholder="Enter a number" style={{ marginTop: 16 }} />
  </div>
);

export default StepContent;
