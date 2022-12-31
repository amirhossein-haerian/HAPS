const formList = [
  {
    name: "Age",
    type: "text",
    rule: ">0",
    description: "age of the patient",
    min: 1,
    max: 120
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
    type: "text",
    rule: ">0",
    description: "resting blood pressure [mm Hg]",
    min: 0,
    max: 200
  },
  {
    name: "Cholesterol",
    type: "text",
    rule: ">0",
    description: "serum cholesterol [mm/dl]",
    min: 0,
    max: 600
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
    type: "text",
    rule: ">60 <202",
    description: "maximum heart rate achieved",
    min: 60,
    max: 202
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
    type: "text",
    rule: ">0",
    description: "",
    min: 0,
    max: 6
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

export { formList };
