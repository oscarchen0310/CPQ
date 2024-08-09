// src/components/StepNavigation.jsx
import React from 'react';
import { Button, message } from 'antd';

const StepNavigation = ({ current, steps, next, prev }) => (
  <div style={{ marginTop: 24 }}>
    {current < steps.length - 1 && (
      <Button type="primary" onClick={next}>
        Next
      </Button>
    )}
    {current === steps.length - 1 && (
      <Button type="primary" onClick={() => message.success('Processing complete!')}>
        Done
      </Button>
    )}
    {current > 0 && (
      <Button style={{ margin: '0 8px' }} onClick={prev}>
        Previous
      </Button>
    )}
  </div>
);

export default StepNavigation;
