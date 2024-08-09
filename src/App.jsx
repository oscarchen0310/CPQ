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

  const handleMachine1Submit = () => {
    message.info(`Data from machine1: ${JSON.stringify(machine1Inputs)}`);
  };

  const handleMachine2Submit = () => {
    message.info(`Data from machine2: ${JSON.stringify(machine2Inputs)}`);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <Card
        style={{
          width: '100%',
          marginBottom: '20px', // Space for the buttons
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
            <Button
              onClick={handleMachine1Submit}
              type="primary"
              style={{ marginTop: '20px' }}
            >
              Submit Machine 1
            </Button>
          </div>
        )}
        {activeTabKey === 'machine2' && (
          <div>
            <div style={{ marginBottom: 16 }}>
              <Title level={4}>Step 1</Title>
              <Row gutter={16}>
                {Object.keys(machine2Inputs.step1).map((input, inputIndex) => (
                  <Col span={6} key={inputIndex}>
                    <Input
                      placeholder={`Input ${inputIndex + 1}`}
                      value={machine2Inputs.step1[input]}
                      onChange={(e) => handleInputChange('step1', input, e, 'machine2')}
                    />
                  </Col>
                ))}
              </Row>
            </div>
            <Button
              onClick={handleMachine2Submit}
              type="primary"
              style={{ marginTop: '20px' }}
            >
              Submit Machine 2
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default App;
