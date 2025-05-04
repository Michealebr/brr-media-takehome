import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateTicket from './CreateTicket';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('CreateTicket', () => {
  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<CreateTicket />);
  });

  // use this to clear require field from issueType and message to run negative test
  const removeRequiredAttributes = (form: HTMLFormElement | null) => {
    form?.querySelectorAll('[required]').forEach((el) => {
      el.removeAttribute('required');
    });
  };

  // reusable form elements
  const getFormElements = () => {
    const issueTypeSelect = screen.getByLabelText(/issue type/i);
    const messageInput = screen.getByLabelText(/explain the issue/i);
    const fileInput = screen.getByLabelText(/upload file/i);
    const submitButton = screen.getByRole('button', {
      name: /submit request/i,
    });

    return { issueTypeSelect, messageInput, fileInput, submitButton };
  };
  // what we values we pass for a successful ticket submission
  it('shows alert after successful ticket submission', async () => {
    const { issueTypeSelect, messageInput, fileInput, submitButton } =
      getFormElements();

    fireEvent.change(issueTypeSelect, {
      target: { value: 'Wi-Fi Connectivity' },
    });
    fireEvent.change(messageInput, {
      target: { value: 'App crashes on login' },
    });
    const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Ticket submitted!');
    });
  });

  // allows us to run the same test with values
  // test for no issueType but has message
  // test for no message but has issueType
  // test for no issueType and no message

  it.each([
    // ['title', 'value', 'value']
    ['missing issueType', '', 'App crashes on login'],
    ['missing message', 'Wi-Fi Connectivity', ''],
    ['missing both', '', ''],
  ])(
    // place holder string %s gets 1st item in array

    'fails when %s',
    // _ used as a placeholder to skip the first value "title" so same as (value , issueType, messageValue) but allows us to not have to use it
    async (_, issueTypeValue, messageValue) => {
      const { issueTypeSelect, messageInput, submitButton } = getFormElements();

      removeRequiredAttributes(submitButton.closest('form'));

      fireEvent.change(issueTypeSelect, { target: { value: issueTypeValue } });
      fireEvent.change(messageInput, { target: { value: messageValue } });

      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith('Please fill in all fields.');
      });
    }
  );

  it.each([
    ['authorized file type - success', 'brokenscreen.png', 'image/png'],
    ['unauthorized file type - fail', 'virus.exe', 'application/x-msdownload'],
  ])('handles file upload when %s', async (_, fileName, fileType) => {
    const { fileInput, submitButton } = getFormElements();

    const testFile = new File(['uploaded file'], fileName, {
      type: fileType,
    });

    fireEvent.change(fileInput, { target: { files: [testFile] } });
    fireEvent.click(submitButton);

    const isAllowedType = [
      'image/png',
      'image/jpeg',
      'application/pdf',
    ].includes(fileType);

    if (isAllowedType) {
      //  Expect filename to be shown in UI
      await waitFor(() => {
        expect(screen.getByText(fileName)).toBeInTheDocument();
      });
    } else {
      //  Expect error alert for disallowed file type
      await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith(
          'Only PNG, JPEG, or PDF files are allowed'
        );
      });
    }
  });
});
