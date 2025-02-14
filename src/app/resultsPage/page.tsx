'use client';

import { Title, TitleAlignment, TitleLevel } from '@/components/Title/Title';
import { RootState } from '@/redux/store';
import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import './resultsPage.scss';

const Results: NextPage = () => {
  const textInputValue = useSelector(
    (state: RootState) => state.form.textInputValue,
  );
  const numberInputValue = useSelector(
    (state: RootState) => state.form.numberInputValue,
  );

  return (
    <div id="results">
      <Title
        level={TitleLevel.ONE}
        alignment={TitleAlignment.CENTER}
        style={{ fontSize: '50px', lineHeight: '50px', margin: '0' }}
      >
        Form submitted with values:
      </Title>
      <div className="form-data">
        <p className="data-item">National dish name: {textInputValue}</p>
        <p className="data-item">
          Amount of times it's cooked: {numberInputValue}
        </p>
      </div>
    </div>
  );
};

export default Results;
