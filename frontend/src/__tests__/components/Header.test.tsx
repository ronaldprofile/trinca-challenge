import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "../../components/Header";

describe("Component Header", () => {
  it("should render title header", () => {
    render(<Header />);

    const headerTitle = screen.getByText(/Agenda de eventos/i);

    expect(headerTitle).toBeInTheDocument();
  });

  it("should possible pass prop title", () => {
    const propTitle = "Another title";

    render(<Header title={propTitle} />);

    const headerTitle = screen.getByText(/Another title/i);

    expect(headerTitle).toBeInTheDocument();
  });

  it("should possible pass prop className", () => {
    /// example class with tailwind css
    const className = "bg-blue-500";

    const { container } = render(<Header className={className} />);

    expect(container.firstChild).toHaveClass(className);
  });
});
