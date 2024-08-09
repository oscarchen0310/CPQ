// src/components/StepContent.jsx
import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';

const stepComponents = {
  First: StepOne,
  Second: StepTwo,
  Third: StepThree,
  Fourth: StepFour,
  Fifth: StepFive,
};

const StepContent = ({ step }) => {
  const StepComponent = stepComponents[step.title];
  return StepComponent ? <StepComponent /> : null;
};

export default StepContent;
