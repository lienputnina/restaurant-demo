import { FC, HTMLProps, ReactNode } from 'react';
import './Header.scss';
import Link from 'next/link';

export const Header: FC = () => (
  <header className="restaurant-header" tabIndex={0}>
    <div id="header-logo">
      <Link href="/">
        <img src="falafel_clipart.jpg" alt="taste of latvia logo" />
      </Link>
    </div>
    <ul className="flex justify-end w-fit gap-3 shrink-0">
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
