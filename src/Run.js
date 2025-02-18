import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from './Portfolio';

describe('Portfolio Component', () => {
  test('renders the header with Michael Hughes', () => {
    render(<Portfolio />);
    const headerElement = screen.getByText(/Test Test/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the About Me section', () => {
    render(<Portfolio />);
    const aboutMeHeading = screen.getByText(/About Me/i);
    expect(aboutMeHeading).toBeInTheDocument();
  });

  test('renders the Experience section', () => {
    render(<Portfolio />);
    const experienceHeading = screen.getByText(/Experience/i);
    expect(experienceHeading).toBeInTheDocument();
  });

  test('renders the Education section', () => {
    render(<Portfolio />);
    const educationHeading = screen.getByText(/Education/i);
    expect(educationHeading).toBeInTheDocument();
  });

  test('renders the Skills section', () => {
    render(<Portfolio />);
    const skillsHeading = screen.getByText(/Skills/i);
    expect(skillsHeading).toBeInTheDocument();
  });
});
