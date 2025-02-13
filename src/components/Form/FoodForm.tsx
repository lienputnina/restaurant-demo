'use client';

// todo - fix the hover issue for form elements
// todo - add unit tests for the form and the form components

import { FC, useEffect, useState } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { NumberInput } from '../NumberInput/NumberInput';
import { Button, ButtonVariant } from '../Button/Button';
import { Title, TitleLevel } from '../Title/Title';

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
    // todo - update for redux
  };

  const clearForm = () => {
    setTextInputValue('');
    setNumberInputValue(undefined);
  };

  return (
    <div id="form">
      <Title
        level={TitleLevel.TWO}
        style={{ fontSize: '35px', lineHeight: '40px', margin: '5' }}
      >
        Please, enter data about your country's most popular dish
      </Title>
      <form>
        <TextInput
          id="fav-food-name"
          label="What's the most popular national dish in your country?"
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
          <Button variant={ButtonVariant.SECONDARY} onClick={() => clearForm()}>
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};
