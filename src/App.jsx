import React, { useState } from 'react';
import { Button, message, Steps, Checkbox, InputNumber, theme } from 'antd';

const steps = [
  {
    title: 'First',
    content: (
      <div>
        <Checkbox>First Step Checkbox</Checkbox>
        <InputNumber placeholder="Enter a number" style={{ marginTop: 16 }} />
      </div>
    ),
  },
  {
    title: 'Second',
    content: (
      <div>
        <Checkbox>Second Step Checkbox</Checkbox>
        <InputNumber placeholder="Enter a number" style={{ marginTop: 16 }} />
      </div>
    ),
  },
  {
    title: 'Third',
    content: (
      <div>
        <Checkbox>Third Step Checkbox</Checkbox>
        <InputNumber placeholder="Enter a number" style={{ marginTop: 16 }} />
      </div>
    ),
  },
  {
    title: 'Fourth',
    content: (
      <div>
        <Checkbox>Fourth Step Checkbox</Checkbox>
        <InputNumber placeholder="Enter a number" style={{ marginTop: 16 }} />
      </div>
    ),
  },
  {
    title: 'Fifth',
    content: (
      <div>
        <Checkbox>Fifth Step Checkbox</Checkbox>
        <InputNumber placeholder="Enter a number" style={{ marginTop: 16 }} />
      </div>
    ),
  },
];

const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default App;
