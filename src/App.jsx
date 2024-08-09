// src/App.jsx
import React, { useState } from 'react';
import { Steps, theme } from 'antd';
import StepContent from './components/StepContent';
import StepNavigation from './components/StepNavigation';

const steps = [
  { title: 'First', checkboxLabel: 'First Step Checkbox' },
  { title: 'Second', checkboxLabel: 'Second Step Checkbox' },
  { title: 'Third', checkboxLabel: 'Third Step Checkbox' },
  { title: 'Fourth', checkboxLabel: 'Fourth Step Checkbox' },
  { title: 'Fifth', checkboxLabel: 'Fifth Step Checkbox' },
];

const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

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
      <div style={contentStyle}>
        <StepContent step={steps[current]} />
      </div>
      <StepNavigation current={current} steps={steps} next={next} prev={prev} />
    </>
  );
};

export default App;
