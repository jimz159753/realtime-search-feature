import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '.';


test('it displays the result of the input', () => {
    // Render the component
    render(<Home />);

    // Get the input and output elements
    const inputElement = screen.getByPlaceholderText('username');
    const outputElement = screen.getByTestId('items');

    // Simulate user typing
    fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });

    // Assert that the output paragraph displays the input value
    expect(outputElement).toHaveTextContent('Hello, World!');
});