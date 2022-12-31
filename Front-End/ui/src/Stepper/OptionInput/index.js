import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { StyledFormControl } from "./StyledComponents";

function OptionInput(props) {
  let { options, value, changeValue } = props;
  return (
    <StyledFormControl>
      <RadioGroup value={value} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
        {options.map((option) => (
          <FormControlLabel key={option.name} value={option.value} control={<Radio />} label={option.name} onChange={() => changeValue(option.value)}></FormControlLabel>
        ))}
      </RadioGroup>
    </StyledFormControl>
  );
}

export default OptionInput;
