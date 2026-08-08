import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Input } from './input';

describe('Input', () => {
  it('renders with an accessible label when associated by id', () => {
    render(
      <div>
        <label htmlFor="candidate-email">E-mail</label>
        <Input id="candidate-email" type="email" />
      </div>,
    );

    expect(screen.getByLabelText('E-mail')).toHaveAttribute('type', 'email');
  });
});
