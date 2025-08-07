import { HTMLProps, memo } from 'react';
import './TextInput.scss';

export type OnChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  { newValue }: { newValue: string },
) => void;
export type OnBlur = (
  event: React.FocusEvent<HTMLInputElement>,
  { newValue }: { newValue: string },
) => void;

export interface TextInputProps
  extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'onBlur'> {
  id: string;
  label: string;
  onChange?: OnChange;
  onBlur?: OnBlur;
}

const TextInputUnmemoized = ({
  id,
  label,
  type = 'text',
  onChange,
  onBlur,
  ...remainingProps
}: TextInputProps) => (
  <div className="text-input">
    <label id={`${id}-label`} htmlFor={`${id}-input`}>
      {label}
    </label>
    <input
      {...remainingProps}
      id={`${id}-input`}
      aria-labelledby={`${id}-label`}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onChange?.(event, { newValue: event.target.value })
      }
      onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
        onBlur?.(event, { newValue: event.target.value })
      }
    />
  </div>
);

export const TextInput = memo(TextInputUnmemoized);
