import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for extended matchers like toBeInTheDocument
import BestSeller from './BestSeller'; // Adjust the import path accordingly

describe('BestSeller Component', () => {
  test('renders the section title correctly', () => {
    render(<BestSeller />);
    const sectionTitle = screen.getByText(/Explore Our Top-Selling Products/i);
    expect(sectionTitle).toBeInTheDocument();
  });

  test('renders the description correctly', () => {
    render(<BestSeller />);
    const description = screen.getByText(/Our best-selling products are customer favorites for a reason/i);
    expect(description).toBeInTheDocument();
  });

  test('renders multiple images in Swiper', () => {
    render(<BestSeller />);
    const images = screen.getAllByAltText(/seller/i);
    expect(images.length).toBeGreaterThan(0);
  });
  
  test('checks if Swiper is rendered', () => {
    render(<BestSeller />);
    const swiperContainer = document.querySelector('.swiper');
    expect(swiperContainer).toBeInTheDocument();
  });
});
