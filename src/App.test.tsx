import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import NavbarComponent from "./NavBar/Navbar";

describe('Single Page Application Test', () => {
  it('should be a Single Page Application', () => {
    render(
      <App />
    );

    // Check if the Home component is rendered initially
    expect(screen.getByText("Home Page Works")).toBeInTheDocument();

    // Simulate navigating to the Tips page
    fireEvent.click(screen.getByText('Tips'));
    expect(screen.getByText('Tips Page Works')).toBeInTheDocument();

    // Simulate navigating to the Contact page
    fireEvent.click(screen.getByText('Contact'));
    expect(screen.getByText('Contact Page Works')).toBeInTheDocument();
  });
});
