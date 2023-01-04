import { useState } from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { formList } from "./data";

import { StyledBox, Result } from "./StyledComponents";

// import TextInput from "./TextInput";
import OptionInput from "./OptionInput";
import SliderInput from "./SliderInput";

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

  const [result, setResult] = useState(null);

  const handleNext = () => {
    if (activeStep === formList.length - 1) {
      console.log(JSON.parse(JSON.stringify([values])))
      fetch("http://localhost:3001/predict", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify([values]),
      })
        .then((res) => res.json())
        .then((res) => setResult(res.prediction));
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setValues({Age: "", Sex: "", ChestPainType: "", Cholesterol: "", FastingBS: "", RestingBP: "", MaxHR: "", ExerciseAngina: "", Oldpeak: "", ST_Slope: "" });
    setResult(null);
  };
  return (
    <StyledBox sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {formList.map((step, index) => (
          <Step key={step.name}>
            <StepLabel>
              {step.name}
              {(values[step.name] || values[step.name] === 0) && `: ${values[step.name]}`}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {step.type === "text" ? (
                <SliderInput
                  value={values[step.name]}
                  label={step.name}
                  min={step.min}
                  max={step.max}
                  step={step.name === "Oldpeak" ? 0.1 : null}
                  changeValue={(value) => {
                    let newValues = { ...values };
                    newValues[step.name] = value;
                    setValues(newValues);
                  }}
                ></SliderInput>
              ) : (
                // <TextInput
                //   value={values[step.name]}
                //   label={step.name}
                //   changeValue={(value) => {
                //     let newValues = { ...values };
                //     newValues[step.name] = value;
                //     setValues(newValues);
                //   }}
                // ></TextInput>
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
                  <Button disabled={!values[step.name] && values[step.name] !== 0} variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
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
      {result && (
        <>
          <Result result={result}>{result === "0" ? "fortunately, there is low probability for you to have heart failure" : "unfortunately, there is high probability for you to have heart failure. you must visit a doctor"}</Result>
          <StyledBox sx={{ my: 6 }} style={{textAlign: "center"}}>
            <div>
              <Button variant="contained" onClick={handleReset}>Reset</Button>
            </div>
          </StyledBox>
        </>
      )}
    </StyledBox>
  );
}

export default StepperUI;
