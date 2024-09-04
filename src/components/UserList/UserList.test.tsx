import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserList } from '.';
import { users } from '@/pages/api/data';

test('it displays the result of the input', () => {
    // Render the component
    render(<UserList users={users} />);

    // Check if each item is in the document
    users.forEach((item, index) => {
        const listItem = screen.getByTestId(`item-${index}`);
        expect(listItem).toBeInTheDocument();
        expect(listItem).toHaveTextContent(item.name);
    });
});