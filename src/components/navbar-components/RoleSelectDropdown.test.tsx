import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import RoleSelectDropdown from './RoleSelectDropdown';
import { UserProvider } from '../../context/UserContext';

describe('RoleSelectDropdown', () => {
  beforeEach(() => {
    // Clear localStorage before each test to reset the initial role - staff runs -  user is set as initial state - fails when admin - we expect user but now initially its staff so doesnt run - thats why we clear local state
    localStorage.clear();
    // fake timing ignore - gives control of when to move time
    vi.useFakeTimers();
    render(
      <UserProvider>
        <RoleSelectDropdown />
      </UserProvider>
    );
  });

  it.each([
    // values i want to test for
    ['user selected', 'user'],
    ['staff selected', 'staff'],
    ['admin selected', 'admin'],
  ])('dropdown successful %s', (_, role) => {
    // selects the select element
    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('user'); // initial state is always 'user'

    fireEvent.change(select, { target: { value: role } });

    // act = wait until , skips timer and then we can expect
    act(() => {
      vi.runAllTimers(); // instantly run the timer - dont wait
    });

    expect(select).toHaveValue(role);
  });
});
