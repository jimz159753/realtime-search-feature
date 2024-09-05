import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '.';


test('it displays the result of the input', () => {
    // Render the component
    render(<Home />);

    // Get the input and output elements
    const inputElement = screen.getByPlaceholderText('username');

    // Simulate user typing
    fireEvent.change(inputElement, { target: { value: 'Samantha' } });

    const output = screen.getByText('Username: Samantha')

    expect(output).toBeInTheDocument()
});