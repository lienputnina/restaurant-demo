import type { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import './Button.scss';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = ButtonVariant.PRIMARY,
  className,
  ...remainingProps
}) => (
  <button
    type="button"
    className={classNames(`button`, `${variant}`, className)}
    {...remainingProps}
  >
    {children}
  </button>
);
