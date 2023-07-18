import { render, screen } from "@testing-library/react";
import { BookingForm } from './components/pages/BookingForm';


describe ("Input Form",()=>{
    test('render email input', () => {
      render(<BookingForm />);
      const inputEl = screen.getByRole("res-email");
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveAttribute("type", "email");
    });

});
