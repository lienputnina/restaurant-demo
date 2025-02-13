'use client';

// todo - fix the hover issue for form elements
// todo - add unit tests

import { FC, useEffect, useState } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { NumberInput } from '../NumberInput/NumberInput';
import { Button, ButtonVariant } from '../Button/Button';

export const FoodForm: FC = () => {
  const [textInputValue, setTextInputValue] = useState<string>('');
  const [numberInputValue, setNumberInputValue] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    setTextInputValue(textInputValue);
    setNumberInputValue(numberInputValue);
  }, [textInputValue, numberInputValue]);

  const submitForm = () => {
    setTextInputValue('');
    setNumberInputValue(undefined);
  };

  return (
    <div id="form">
      <h2>Enter your data:</h2>
      <form>
        <TextInput
          id="fav-food-name"
          label="What's your favorite food?"
          value={textInputValue}
          onChange={(newValue) => {
            setTextInputValue(newValue);
          }}
        />
        <NumberInput
          id="making-count"
          label="How many times a year do you make this dish?"
          name="amount of making the dish"
          value={numberInputValue}
          onChange={(newValue) => {
            setNumberInputValue(newValue);
          }}
        />
        <div id="form-buttons">
          <Button variant={ButtonVariant.PRIMARY} onClick={() => submitForm()}>
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
