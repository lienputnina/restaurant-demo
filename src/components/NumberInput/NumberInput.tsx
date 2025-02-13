import { HTMLProps } from 'react';
import './NumberInput.scss';

export interface NumberInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  id: string;
  name?: string;
  label: string;
  value?: number;
  min?: number;
  max?: number;
  onChange: (newValue: number) => void;
}

export const NumberInput = ({
  id,
  name,
  label,
  value,
  min,
  max,
  onChange,
  ...remainingProps
}: NumberInputProps) => (
  <div className="number-input">
    <label id={`${id}-label`} htmlFor={`${id}-input`}>
      {label}
    </label>
    <input
      {...remainingProps}
      id={`${id}-input`}
      type="number"
      name={name}
      value={value !== undefined ? value : ''}
      min={min}
      max={max}
      aria-labelledby={`${id}-label`}
      onChange={(event) =>
        onChange(event.target.value === '' ? 0 : Number(event.target.value))
      }
    />
  </div>
);
