import React, { useState } from 'react';
import { Card, Input, Row, Col, Button, message, Typography } from 'antd';

const { Title } = Typography;

const tabList = [
  {
    key: 'machine1',
    tab: 'Machine 1',
  },
  {
    key: 'machine2',
    tab: 'Machine 2',
  },
];

const App = () => {
  const [activeTabKey, setActiveTabKey] = useState('machine1');

  // State for inputs in machine1 tab (6 steps, each with 4 inputs)
  const [machine1Inputs, setMachine1Inputs] = useState(
    Array.from({ length: 6 }, () => Array(4).fill(''))
  );
  
  // State for inputs in machine2 tab (6 steps, each with 4 inputs)
  const [machine2Inputs, setMachine2Inputs] = useState(
    Array.from({ length: 6 }, () => Array(4).fill(''))
  );

  const handleInputChange = (stepIndex, inputIndex, e, tab) => {
    const newInputs = tab === 'machine1' ? [...machine1Inputs] : [...machine2Inputs];
    newInputs[stepIndex][inputIndex] = e.target.value;

    if (tab === 'machine1') {
      setMachine1Inputs(newInputs);
    } else {
      setMachine2Inputs(newInputs);
    }
  };

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const handleSubmit = () => {
    const data = activeTabKey === 'machine1' ? machine1Inputs : machine2Inputs;
    // Process the data as needed
    message.info(`Data from ${activeTabKey}: ${JSON.stringify(data)}`);
  };

  return (
    <Card
      style={{
        width: '100%',
      }}
      title="CPQ"
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={onTabChange}
      extra={<Button onClick={handleSubmit} type="primary">Submit</Button>}
    >
      {activeTabKey === 'machine1' && (
        <div>
          {[...Array(6)].map((_, stepIndex) => (
            <div key={stepIndex} style={{ marginBottom: 16 }}>
              <Title level={4}>{`Step ${stepIndex + 1}`}</Title>
              <Row gutter={16}>
                {[...Array(4)].map((_, inputIndex) => (
                  <Col span={6} key={inputIndex}>
                    <Input
                      placeholder={`Input ${inputIndex + 1}`}
                      value={machine1Inputs[stepIndex][inputIndex]}
                      onChange={(e) => handleInputChange(stepIndex, inputIndex, e, 'machine1')}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      )}
      {activeTabKey === 'machine2' && (
        <div>
          {[...Array(6)].map((_, stepIndex) => (
            <div key={stepIndex} style={{ marginBottom: 16 }}>
              <Title level={4}>{`Step ${stepIndex + 1}`}</Title>
              <Row gutter={16}>
                {[...Array(4)].map((_, inputIndex) => (
                  <Col span={6} key={inputIndex}>
                    <Input
                      placeholder={`Input ${inputIndex + 1}`}
                      value={machine2Inputs[stepIndex][inputIndex]}
                      onChange={(e) => handleInputChange(stepIndex, inputIndex, e, 'machine2')}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default App;
