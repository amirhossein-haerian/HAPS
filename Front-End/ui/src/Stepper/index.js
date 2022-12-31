import { useState } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { formList } from "./data";

import { StyledBox } from "./StyledComponents";

import TextInput from "./TextInput";
import OptionInput from "./OptionInput";

function StepperUI() {
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState({
    Age: "",
    Sex: "",
    ChestPainType: "",
    Cholesterol: "",
    FastingBS: "",
    RestingBP: "",
    MaxHR: "",
    ExerciseAngina: "",
    Oldpeak: "",
    ST_Slope: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <StyledBox sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {formList.map((step, index) => (
          <Step key={step.name}>
            <StepLabel>{step.name}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {step.type === "text" ? (
                <TextInput
                  value={values[step.name]}
                  label={step.name}
                  changeValue={(value) => {
                    let newValues = { ...values };
                    newValues[step.name] = value;
                    setValues(newValues);
                  }}
                ></TextInput>
              ) : (
                <OptionInput
                  options={step.options}
                  value={values[step.name]}
                  changeValue={(value) => {
                    let newValues = { ...values };
                    newValues[step.name] = value;
                    setValues(newValues);
                  }}
                ></OptionInput>
              )}
              <StyledBox sx={{ mb: 2 }}>
                <div>
                  <Button disabled={!values[step.name]} variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                    {index === formList.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </StyledBox>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </StyledBox>
  );
}

export default StepperUI;
