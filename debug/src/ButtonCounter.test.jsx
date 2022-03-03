import { render, screen } from '@testing-library/react';
import * as React from 'react';

import ButtonCounter from './ButtonCounter';

test('renders ButtonCounter', () => {
   const text = /Meow/;
   render(<ButtonCounter />);
   expect(screen.getByText(text)).toBeInTheDocument();
});