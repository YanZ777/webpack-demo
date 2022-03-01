import { render, screen } from '@testing-library/react';
import * as React from 'react';

import Playground from './Playground';

test('renders Playground', () => {
   const text = 'Hello World!';
   render(<Playground />);
   expect(screen.getByText(text)).toBeInTheDocument();
});