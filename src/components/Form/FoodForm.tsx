'use client';

// todo - fix the hover issue for form elements
// todo - add unit tests
// todo - add useEffect for the form fields and set the initial number input to not zero

import { FC, useRef, useState } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { NumberInput } from '../NumberInput/NumberInput';
import { Button, ButtonVariant } from '../Button/Button';

export const FoodForm: FC = () => {
  const [textInputValue, setTextInputValue] = useState<string>('');
  const [numberInputValue, setNumberInputValue] = useState(0);

  // todo - add ref to Number Input
  let numberInputRef = useRef(0);

  const submitForm = () => {
    console.log(
      `Form submitted with textValue: ${textInputValue}, 
       numberValue: ${numberInputValue}`,
    );
    setTextInputValue('');
    setNumberInputValue(undefined);
    if (numberInputRef.current) numberInputRef.current.value = '';
  };

  // const clearForm = () => {
  //   setTextInputValue('');
  //   setNumberInputValue(undefined);
  //   if (numberInputRef.current) numberInputRef.current.value = '';
  // };

  return (
    <div id="form">
      <h2>Enter your data:</h2>
      <form>
        <TextInput
          id="fav-food-name"
          label="Text input"
          value={textInputValue}
          onChange={(newValue) => {
            setTextInputValue(newValue);
          }}
        />
        <NumberInput
          id="making-count"
          label="How many times a year do you make this dish?"
          name="number of opponents"
          value={numberInputValue}
          onChange={(newValue) => {
            setNumberInputValue(newValue);
          }}
        />
        <div id="form-buttons">
          <Button
            variant={ButtonVariant.PRIMARY}
            // onClick={() => submitForm()}
          >
            Submit
          </Button>
          <Button
            variant={ButtonVariant.SECONDARY}
            // onClick={() => clearForm()}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};
