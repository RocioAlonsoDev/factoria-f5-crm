// describe ('FormAtom component', () =>{

// test()

// });


import { render, fireEvent } from '@testing-library/react';
import FormAtom from './FormAtom';

// Mock the onSubmit function
const mockOnSubmit = jest.fn();

const formData = [
  { id: 'field1', label: 'Field 1', type: 'text' },
  { id: 'field2', label: 'Field 2', type: 'select', options: ['Option 1', 'Option 2'] },
];

const formTitle = 'Test Form';

test('renders form with correct title and fields', () => {
  const { getByText, getByLabelText, getByTestId } = render(
    <FormAtom formTitle={formTitle} formData={formData} onSubmit={mockOnSubmit} />
  );

  // Check if the form title is rendered
  expect(getByText(formTitle)).toBeInTheDocument();

  // Check if the form fields are rendered
  formData.forEach((field) => {
    const label = getByText(field.label);
    const input = getByLabelText(field.label);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    if (field.type === 'select') {
      const select = getByTestId(field.id); // Assuming you add data-testid to the select element
      expect(select).toBeInTheDocument();
    }
  });
});

test('handles form submission correctly', () => {
  const { getByTestId } = render(
    <FormAtom formTitle={formTitle} formData={formData} onSubmit={mockOnSubmit} />
  );

  // Simulate user input
  const field1Input = getByTestId('field1');
  fireEvent.change(field1Input, { target: { value: 'Test Value' } });

  // Simulate form submission
  const submitButton = getByText('Guardar');
  fireEvent.click(submitButton);

  // Verify that the onSubmit function was called with the correct values
  expect(mockOnSubmit).toHaveBeenCalledWith({ field1: 'Test Value', field2: '' });
});

// You can add more test cases as needed
