import type { FC } from 'react';
import classNames from 'classnames';

import './Title.scss';

export enum TitleLevel {
  ONE = 'h1',
  TWO = 'h2',
  THREE = 'h3',
  FOUR = 'h4',
}

export enum TitleAlignment {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export interface TitleProps extends React.HTMLProps<HTMLHeadingElement> {
  level?: TitleLevel;
  alignment?: TitleAlignment;
}

export const Title: FC<TitleProps> = ({
  level = TitleLevel.ONE,
  children,
  alignment = TitleAlignment.LEFT,
  className,
  ...remainingProps
}: TitleProps) => {
  switch (level) {
    case TitleLevel.TWO:
      return (
        <h2
          className={classNames(`title`, 'heading-two', alignment, className)}
          {...remainingProps}
        >
          {children}
        </h2>
      );

    case TitleLevel.THREE:
      return (
        <h3
          className={classNames(`title`, 'heading-three', alignment, className)}
          {...remainingProps}
        >
          {children}
        </h3>
      );

    case TitleLevel.FOUR:
      return (
        <h4
          className={classNames(`title`, 'heading-four', alignment, className)}
          {...remainingProps}
        >
          {children}
        </h4>
      );

    case TitleLevel.ONE:
    default:
      return (
        <h1
          className={classNames(`title`, 'heading-one', alignment, className)}
          {...remainingProps}
        >
          {children}
        </h1>
      );
  }
};
