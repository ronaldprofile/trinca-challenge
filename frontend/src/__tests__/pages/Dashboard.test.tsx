import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Dashboard } from "../../pages/Dashboard";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../services/queryClient";

describe("Page Dashboard", () => {
  it("should render header component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );

    const headerTitle = screen.getByText(/Agenda de eventos/i);
    expect(headerTitle).toBeInTheDocument();
  });

  it("should render button create new event", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    );

    const buttonCreateNewEvent = screen.getByText(/Adicionar evento/i);
    expect(buttonCreateNewEvent).toBeInTheDocument();
  });

  // it("should render button sign out, when user is logged", () => {
  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <Dashboard />
  //     </QueryClientProvider>
  //   );

  //   const buttonSignOut = screen.getByText(/sair/i);
  //   expect(buttonSignOut).toBeInTheDocument();
  // });
});
