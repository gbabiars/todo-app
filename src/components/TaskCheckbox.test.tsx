import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TaskCheckbox from "./TaskCheckbox";

describe("TaskCheckbox", () => {
  it("should render", () => {
    render(
      <TaskCheckbox
        ariaLabelledby="task-1"
        checked={false}
        onCheckedChange={() => {}}
      />
    );

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-labelledby", "task-1");
    expect(checkbox).toHaveAttribute("aria-checked", "false");
  });

  it("should render checked", () => {
    render(
      <TaskCheckbox
        ariaLabelledby="task-1"
        checked={true}
        onCheckedChange={() => {}}
      />
    );

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-labelledby", "task-1");
    expect(checkbox).toHaveAttribute("aria-checked", "true");
  });

  it("should call onCheckedChange when clicked", async () => {
    const onCheckedChange = vi.fn();

    render(
      <TaskCheckbox
        ariaLabelledby="task-1"
        checked={false}
        onCheckedChange={onCheckedChange}
      />
    );

    await fireEvent.click(screen.getByRole("checkbox"));

    expect(onCheckedChange).toHaveBeenCalled();
  });
});
