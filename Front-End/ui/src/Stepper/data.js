const formList = [
  {
    name: "Age",
    type: "text",
    rule: ">0",
    description: "The age of the patient, in years.",
    min: 1,
    max: 120,
  },
  {
    name: "Sex",
    type: "option",
    options: [
      {
        name: "Male",
        value: "M",
      },
      {
        name: "Female",
        value: "F",
      },
    ],
    description: "The patient's gender, male or female.",
  },
  {
    name: "ChestPainType",
    type: "options",
    options: [
      {
        name: "Typical Angina",
        value: "TA",
      },
      {
        name: "Atypical Angina",
        value: "ATA",
      },
      {
        name: "Non-Anginal Pain",
        value: "NAP",
      },
      {
        name: "Asymptomatic",
        value: "ASY",
      },
    ],
    description: `The type of chest pain experienced by the patient:
    i. TA: Typical Angina
    ii. ATA: Atypical Angina
    iii. NAP: Non-Anginal Pain
    iv. ASY: Asymptomatic`,
  },
  {
    name: "RestingBP",
    type: "text",
    rule: ">0",
    description: "The patient's resting blood pressure (mmHg).",
    min: 0,
    max: 200,
  },
  {
    name: "Cholesterol",
    type: "text",
    rule: ">0",
    description: "The patient's serum cholesterol (mg/dl).",
    min: 0,
    max: 600,
  },
  {
    name: "FastingBS",
    type: "options",
    options: [
      {
        name: "glucose > 120 mg/dl",
        value: 1,
      },
      {
        name: "otherwise",
        value: 0,
      },
    ],
    description: "The patient's fasting blood sugar.",
  },
  {
    name: "RestingECG",
    type: "options",
    options: [
      {
        name: "Normal",
        value: "Normal",
      },
      {
        name: "having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV)",
        value: "ST",
      },
      {
        name: "showing probable or definite left ventricular hypertrophy by Estes' criteria",
        value: "LVH",
      },
    ],
    description: `Resting electrocardiogram results:
    i. Normal
    ii. ST: having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV)
    iii. LVH: showing probable or definite left ventricular hypertrophy by Estes' criteria`,
  },
  {
    name: "MaxHR",
    type: "text",
    rule: ">60 <202",
    description: "Maximum heart rate achieved, beats per minute.",
    min: 60,
    max: 202,
  },
  {
    name: "ExerciseAngina",
    type: "options",
    options: [
      {
        name: "Yes",
        value: "Y",
      },
      {
        name: "No",
        value: "N",
      },
    ],
    description: "Exercise-induced angina, yes or no.",
  },
  {
    name: "Oldpeak",
    type: "text",
    rule: ">0",
    description: "Numeric measure of ST depression induced by exercise relative to rest.",
    min: 0,
    max: 6,
  },
  {
    name: "ST_Slope",
    type: "options",
    options: [
      {
        name: "upsloping",
        value: "Up",
      },
      {
        name: "Flat",
        value: "Flat",
      },
      {
        name: "downsloping",
        value: "Down",
      },
    ],
    description: `The slope of the peak exercise ST segment.
    i. Up: upsloping
    ii. Flat
    iii. Down: downsloping`,
  },
];

export { formList };
