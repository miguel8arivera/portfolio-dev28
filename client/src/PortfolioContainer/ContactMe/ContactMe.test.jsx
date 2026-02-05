import React from 'react';
import { vi, describe, beforeEach, test, expect, it, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import axios from 'axios';
import ContactMe from './ContactMe';
import ScrollService from '../../utilities/ScrollService';

// Mock dependencies
vi.mock('axios');
vi.mock('react-toastify', () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}));

vi.mock('../../utilities/ScrollService', () => ({
  default: {
    currentScreenFadeIn: {
      subscribe: vi.fn(() => ({ unsubscribe: vi.fn() })),
    },
  },
}));

vi.mock('../../utilities/Animations', () => ({
  animations: {
    fadeInScreen: vi.fn(),
  },
}));

describe('ContactMe Component', () => {
  beforeEach(() => {
    ScrollService.currentScreenFadeIn.subscribe.mockImplementation(() => ({
      unsubscribe: vi.fn(),
    }));
    vi.clearAllMocks();
  });

  test('renders contact form with all fields', () => {
    render(<ContactMe id="contact" />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  test('shows error when submitting empty form', async () => {
    render(<ContactMe id="contact" />);

    const submitButton = screen.getByRole('button', { name: /send/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Please fill all the fields');
    });
    expect(axios.post).not.toHaveBeenCalled();
  });

  test('shows error when name is empty', async () => {
    render(<ContactMe id="contact" />);

    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Please fill all the fields');
    });
    expect(axios.post).not.toHaveBeenCalled();
  });

  test('shows error when email is empty', async () => {
    render(<ContactMe id="contact" />);

    const nameInput = screen.getByLabelText(/name/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Please fill all the fields');
    });
    expect(axios.post).not.toHaveBeenCalled();
  });

  test('shows error when message is empty', async () => {
    render(<ContactMe id="contact" />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Please fill all the fields');
    });
    expect(axios.post).not.toHaveBeenCalled();
  });

  test('submits form successfully with valid data', async () => {
    const mockResponse = {
      status: 200,
      data: { msg: 'Thank you for contacting Miguel!' },
    };
    axios.post.mockResolvedValue(mockResponse);

    render(<ContactMe id="contact" />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Hello, this is a test message!' },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/contact', {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello, this is a test message!',
      });
    });

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        'Thank you for contacting Miguel!',
      );
    });

    // Check that form fields are cleared
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');
  });

  test('handles API error gracefully', async () => {
    // Mock console.error to avoid noise in test output
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    axios.post.mockRejectedValue(new Error('Network error'));

    render(<ContactMe id="contact" />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        'Failed to send message. Please try again.',
      );
    });

    // Verify console.error was called (but output is suppressed)
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error sending message:',
      expect.any(Error),
    );

    // Restore console.error
    consoleErrorSpy.mockRestore();
  });

  test('trims whitespace from inputs during validation', async () => {
    render(<ContactMe id="contact" />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send/i });

    // Enter only whitespace
    fireEvent.change(nameInput, { target: { value: '   ' } });
    fireEvent.change(emailInput, { target: { value: '   ' } });
    fireEvent.change(messageInput, { target: { value: '   ' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Please fill all the fields');
    });
    expect(axios.post).not.toHaveBeenCalled();
  });
});
