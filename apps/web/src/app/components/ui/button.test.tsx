import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './button';

describe('Button', () => {
  it('renders an accessible button label', () => {
    render(<Button>Enviar resposta</Button>);

    expect(screen.getByRole('button', { name: 'Enviar resposta' })).toBeInTheDocument();
  });

  it('calls the click handler when activated by the user', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Continuar</Button>);
    await user.click(screen.getByRole('button', { name: 'Continuar' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
