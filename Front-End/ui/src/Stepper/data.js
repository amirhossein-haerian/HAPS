const data = [
  {
    name: "Age",
    type: "number",
    rule: ">0",
    description: "age of the patient",
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
    description: "sex of the patient",
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
    description: "chest pain type",
  },
  {
    name: "RestingBP",
    type: "number",
    rule: ">0",
    description: "resting blood pressure [mm Hg]",
  },
  {
    name: "Cholesterol",
    type: "number",
    rule: ">0",
    description: "serum cholesterol [mm/dl]",
  },
  {
    name: "FastingBS",
    type: "options",
    options: [
      {
        name: "FastingBS > 120 mg/dl",
        value: "1",
      },
      {
        name: "FastingBS <= 120 mg/dl",
        value: "0",
      },
    ],
    description: "fasting blood sugar",
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
    description: "resting electrocardiogram results",
  },
  {
    name: "MaxHR",
    type: "number",
    rule: ">60 <202",
    description: "maximum heart rate achieved",
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
    description: "exercise-induced angina",
  },
  {
    name: "Oldpeak",
    type: "number",
    rule: ">0",
    description: "",
  },
  {
    name: "ST_Slope",
    type: "options",
    options: [
      {
        name: "Up",
        value: "upsloping",
      },
      {
        name: "Flat",
        value: "flat",
      },
      {
        name: "downsloping",
        value: "Down",
      },
    ],
    description: "the slope of the peak exercise ST segment",
  },
];
