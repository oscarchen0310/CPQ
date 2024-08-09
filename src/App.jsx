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

  // State for inputs in machine1 tab
  const [machine1Inputs, setMachine1Inputs] = useState({
    step1: { input1: '', input2: '', input3: '', input4: '' },
    step2: { input1: '', input2: '', input3: '', input4: '' },
    step3: { input1: '', input2: '', input3: '', input4: '' },
    step4: { input1: '', input2: '', input3: '', input4: '' },
    step5: { input1: '', input2: '', input3: '', input4: '' },
    step6: { input1: '', input2: '', input3: '', input4: '' },
  });
  
  // State for inputs in machine2 tab
  const [machine2Inputs, setMachine2Inputs] = useState({
    step1: { input1: '', input2: '', input3: '', input4: '' },
    step2: { input1: '', input2: '', input3: '', input4: '' },
    step3: { input1: '', input2: '', input3: '', input4: '' },
    step4: { input1: '', input2: '', input3: '', input4: '' },
    step5: { input1: '', input2: '', input3: '', input4: '' },
    step6: { input1: '', input2: '', input3: '', input4: '' },
  });

  const handleInputChange = (step, input, e, tab) => {
    const newInputs = tab === 'machine1' ? { ...machine1Inputs } : { ...machine2Inputs };
    newInputs[step][input] = e.target.value;

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
    <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '60px' }}>
      <Card
        style={{
          width: '100%',
          marginBottom: '60px', // Space for the floating button
        }}
        title="CPQ"
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
      >
        {activeTabKey === 'machine1' && (
          <div>
            {Object.keys(machine1Inputs).map((step, stepIndex) => (
              <div key={stepIndex} style={{ marginBottom: 16 }}>
                <Title level={4}>{`Step ${stepIndex + 1}`}</Title>
                <Row gutter={16}>
                  {Object.keys(machine1Inputs[step]).map((input, inputIndex) => (
                    <Col span={6} key={inputIndex}>
                      <Input
                        placeholder={`Input ${inputIndex + 1}`}
                        value={machine1Inputs[step][input]}
                        onChange={(e) => handleInputChange(step, input, e, 'machine1')}
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
            {Object.keys(machine2Inputs).map((step, stepIndex) => (
              <div key={stepIndex} style={{ marginBottom: 16 }}>
                <Title level={4}>{`Step ${stepIndex + 1}`}</Title>
                <Row gutter={16}>
                  {Object.keys(machine2Inputs[step]).map((input, inputIndex) => (
                    <Col span={6} key={inputIndex}>
                      <Input
                        placeholder={`Input ${inputIndex + 1}`}
                        value={machine2Inputs[step][input]}
                        onChange={(e) => handleInputChange(step, input, e, 'machine2')}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </div>
        )}
      </Card>
      <Button
        onClick={handleSubmit}
        type="primary"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000, // Ensure it stays on top of other content
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default App;
