import { HTMLProps } from 'react';
import './TextInput.scss';

export interface TextInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  id: string;
  name?: string;
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

export const TextInput = ({
  id,
  name,
  label,
  value,
  onChange,
  className,
  ...remainingProps
}: TextInputProps) => (
  <div className="text-input">
    <label id={`${id}-label`} htmlFor={`${id}-input`}>
      {label}
    </label>
    <input
      {...remainingProps}
      id={`${id}-input`}
      type="text"
      name={name}
      value={value}
      aria-labelledby={`${id}-label`}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onChange(event.target.value)
      }
    />
  </div>
);
