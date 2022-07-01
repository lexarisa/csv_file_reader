import { render, screen } from '@testing-library/react';
import App from './App';

it('should render a table', async () => {
  render(<App />);
  const tableElement = await screen.findByRole('table');
  expect(tableElement).toContainHTML('table');
});

it('should render the header', () => {
  render(<App />);
  const headingElement = screen.getByText(/thing or two/i);
  expect(headingElement).toBeInTheDocument();
});

it('should render table rows', () => {
  render(<App />);
  const tableRowElements = screen.getAllByRole('row');
  expect(tableRowElements.length).not.toBe(0);
});

it('should render correct table header', () => {
  render(<App />);
  expect(screen.getAllByRole('row')[0]).toHaveTextContent(
    /song name|band|year/i
  );
});
