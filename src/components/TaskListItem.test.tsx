import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import TaskListItem from "./TaskListItem";

describe("TaskListItem", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-04-12"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should render default variant without due date", () => {
    render(
      <TaskListItem id="1" description="Default task" onComplete={() => {}} />
    );

    expect(screen.getByText("Default task")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-checked",
      "false"
    );
  });

  it("should render default variant with due date", () => {
    render(
      <TaskListItem
        id="1"
        description="Default task"
        dueDate={new Date("2025-04-14T12:00:00")}
        onComplete={() => {}}
      />
    );

    expect(screen.getByText("Default task")).toBeInTheDocument();
    expect(screen.getByText("04/14/2025")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-checked",
      "false"
    );
  });

  it("should render overdue variant", () => {
    render(
      <TaskListItem
        id="1"
        description="Overdue task"
        dueDate={new Date("2025-04-11T12:00:00")}
        variant="overdue"
        onComplete={() => {}}
      />
    );

    expect(screen.getByText("Overdue task")).toBeInTheDocument();
    expect(screen.getByText("04/11/2025")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-checked",
      "false"
    );
  });

  it("should render completed variant", () => {
    render(
      <TaskListItem
        id="1"
        description="Completed task"
        variant="completed"
        onComplete={() => {}}
      />
    );

    expect(screen.getByText("Completed task")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-checked",
      "true"
    );
  });

  it("should render completed variant with due date", () => {
    render(
      <TaskListItem
        id="1"
        description="Completed task"
        dueDate={new Date("2025-04-14T12:00:00")}
        variant="completed"
        onComplete={() => {}}
      />
    );

    expect(screen.getByText("Completed task")).toBeInTheDocument();
    expect(screen.getByText("04/14/2025")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toHaveAttribute(
      "aria-checked",
      "true"
    );
  });

  it("should call onComplete when checkbox is clicked", async () => {
    const onComplete = vi.fn();
    render(
      <TaskListItem id="1" description="Default task" onComplete={onComplete} />
    );

    await fireEvent.click(screen.getByRole("checkbox"));

    expect(onComplete).toHaveBeenCalled();
  });
});
