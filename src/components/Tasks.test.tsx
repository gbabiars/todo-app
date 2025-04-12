import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tasks from "./Tasks";
import { IntlProvider } from "react-intl";

function renderWithIntl(component: React.ReactNode) {
  return render(
    <IntlProvider messages={{}} locale="en">
      {component}
    </IntlProvider>
  );
}

describe("Tasks", () => {
  it("should render empty tasks", () => {
    renderWithIntl(<Tasks tasks={[]} status="success" onComplete={() => {}} />);

    expect(
      screen.getByText("You do not have any todo items.")
    ).toBeInTheDocument();
  });

  it("should render loading tasks", () => {
    renderWithIntl(<Tasks tasks={[]} status="loading" onComplete={() => {}} />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("should render error", () => {
    renderWithIntl(<Tasks tasks={[]} status="error" onComplete={() => {}} />);

    expect(
      screen.getByText(
        "There was an error loading todo items, please try again later."
      )
    ).toBeInTheDocument();
  });

  it("should render tasks", () => {
    renderWithIntl(
      <Tasks
        tasks={[
          { id: "1", description: "Task 1", isComplete: false, dueDate: null },
        ]}
        status="success"
        onComplete={() => {}}
      />
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
  });
});
