import { describe, it } from 'node:test';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';

import { Header } from './Header';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockOn = jest.fn();

describe('Header', () => {
  it('renders without crashing ', () => {
    const children = '';
    // render(<Header>{children}</Header>);
  });

  it('should have an image', () => {
    render(<Header />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  // it('should navigate to home page on logo click', async () => {
  //   useRouter.mockReturnValue({
  //     events: {
  //       on: mockOn,
  //       off: () => {},
  //     },
  //   });

  //   const user = userEvent.setup();

  //   render(<Header />);
  //   expect(screen.getByRole('img')).toBeInTheDocument();

  //   // expect not to navigate to homepage

  //   await user.click(screen.getByRole('img'));
  //   //expect to navigate to homepage (/)
  //   expect(useRouter).toHaveBeenCalled();
  //   expect(mockOn).toHaveBeenCalled();
  //   expect(mockOn).toHaveBeenCalledWith('some event', expect.any(Function));
  // });
});
