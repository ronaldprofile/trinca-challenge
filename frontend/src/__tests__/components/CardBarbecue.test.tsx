import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CardBarbecue } from "../../components/CardBarbecue";

const barbecue = {
  id: "1",
  title: "FIFA 23",
  description: "Jogar videogame",
  amount_collected: 300,
  scheduled_day: "10/22/2022",

  members: [
    {
      id: "1",
      name: "Ronald",
      paid: true,
      contribution: 200,
      hasDrinkIncluded: false,
    },
    {
      id: "2",
      name: "Marc",
      paid: true,
      contribution: 100,
      hasDrinkIncluded: false,
    },
  ],
};

describe("Component Card barbecue", () => {
  it("the component snapshot must always be the same", () => {
    const { container } = render(
      <CardBarbecue barbecue={barbecue} isFetchingBarbecue={false} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render title event", () => {
    render(<CardBarbecue barbecue={barbecue} isFetchingBarbecue={false} />);

    const titleEvent = screen.getByText("FIFA 23");

    expect(titleEvent).toBeInTheDocument();
  });

  it("should render schedule day event", () => {
    render(<CardBarbecue barbecue={barbecue} isFetchingBarbecue={false} />);

    const scheduleDayEvent = screen.getByText("22/10");

    expect(scheduleDayEvent).toBeInTheDocument();
  });

  it("should render total members event", () => {
    render(<CardBarbecue barbecue={barbecue} isFetchingBarbecue={false} />);

    expect(barbecue.members).toHaveLength(2);

    const totalMembers = screen.getByTestId("total_members_event");

    expect(totalMembers).toBeInTheDocument();
  });

  it("should render amount collected event", () => {
    render(<CardBarbecue barbecue={barbecue} isFetchingBarbecue={false} />);

    const amountCollectedEvent = screen.getByTestId("amount_collected_event");

    expect(amountCollectedEvent).toBeInTheDocument();

    expect(amountCollectedEvent).toHaveTextContent("R$ 300,00");
  });

  it("should navigate to see details event", async () => {
    render(<CardBarbecue barbecue={barbecue} isFetchingBarbecue={false} />);

    const linkElement = screen.getByRole("link", {
      hidden: true,
    });

    expect(linkElement).toBeInTheDocument();

    expect(linkElement).toHaveAttribute("href", "/details/1");

    userEvent.click(linkElement);

    expect(await screen.findByText("FIFA 23")).toBeInTheDocument();
  });
});
