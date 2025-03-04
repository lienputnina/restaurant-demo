import { FC, HTMLProps, ReactNode } from 'react';

export const Hero: FC = () => (
  <div className="flex flex-col items-center justify-center border-b-2 border-black border-solid p-8 mb-4 w-full h-70">
    <img src="/" alt="hero logo image" />
    <p>Slogan</p>
  </div>
);
