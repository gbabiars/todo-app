import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tasks from "./Tasks";

describe("Tasks", () => {
  it("should render empty tasks", () => {
    render(<Tasks tasks={[]} status="success" onComplete={() => {}} />);

    expect(screen.getByText("You do not have any tasks.")).toBeInTheDocument();
  });

  it("should render loading tasks", () => {
    render(<Tasks tasks={[]} status="loading" onComplete={() => {}} />);

    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("should render error", () => {
    render(<Tasks tasks={[]} status="error" onComplete={() => {}} />);

    expect(
      screen.getByText(
        "There was an error loading tasks, please try again later."
      )
    ).toBeInTheDocument();
  });

  it("should render tasks", () => {
    render(
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
