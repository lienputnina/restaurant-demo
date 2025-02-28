import { FC, HTMLProps, ReactNode } from 'react';
import './Header.scss';

export const Header: FC = () => (
  <header className="restaurant-header">
    <div id="header-logo">
      <a href="/">
        <img src="falafel_clipart.jpg" alt="taste of latvia logo" />
      </a>
    </div>
    <ul className="flex justify-end w-full gap-3">
      <li className="menu-item">
        <a href="">Menu</a>
      </li>
      <li className="menu-item">
        <a href="">About</a>
      </li>
      <li className="menu-item">
        <a href="">Contact us</a>
      </li>
    </ul>
  </header>
);
