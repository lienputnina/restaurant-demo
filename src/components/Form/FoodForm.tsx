'use client';

// todo - fix the hover issue for form elements
// todo - add unit tests for the form and the form components
// todo - create the results page

import { FC } from 'react';

import { TextInput } from '../TextInput/TextInput';
import { NumberInput } from '../NumberInput/NumberInput';
import { Button, ButtonVariant } from '../Button/Button';
import { Title, TitleLevel } from '../Title/Title';

import {
  setTextInputValue,
  setNumberInputValue,
  submitForm,
  clearForm,
} from '@/redux/features/FormState/FormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import Link from 'next/link';

export const FoodForm: FC = () => {
  const dispatch = useDispatch();
  const textInputValue = useSelector(
    (state: RootState) => state.form.textInputValue,
  );
  const numberInputValue = useSelector(
    (state: RootState) => state.form.numberInputValue,
  );

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
            dispatch(setTextInputValue(newValue));
          }}
        />
        <NumberInput
          id="making-count"
          label="How many times a year do you make this dish?"
          name="amount of making the dish"
          value={numberInputValue}
          onChange={(newValue) => {
            dispatch(setNumberInputValue(newValue));
          }}
        />
        <div id="form-buttons">
          <Link href="/resultsPage">
            <Button
              variant={ButtonVariant.PRIMARY}
              onClick={() => dispatch(submitForm())}
            >
              Submit
            </Button>
          </Link>
          <Button
            variant={ButtonVariant.SECONDARY}
            onClick={() => dispatch(clearForm())}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};
