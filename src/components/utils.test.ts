import { describe, it, expect } from "vitest";
import { combineClasses, sortTasks } from "./utils";
import { Task } from "./types";

describe("combineClasses", () => {
  it("should return an empty string if no classes are provided", () => {
    expect(combineClasses()).toBe("");
  });

  it("should combine classes", () => {
    expect(combineClasses("class1", "class2")).toBe("class1 class2");
  });

  it("should remove empty strings", () => {
    expect(combineClasses("class1", "", "class2")).toBe("class1 class2");
  });
});

describe("sortTasks", () => {
  it("should sort tasks by due date", () => {
    const tasks: Task[] = [
      {
        id: "1",
        description: "File 2023 Taxes",
        isComplete: true,
        dueDate: new Date("2023-03-10T17:50:44.673Z"),
      },
      {
        id: "2",
        description: "Fold laundry",
        isComplete: true,
        dueDate: null,
      },
      {
        id: "3",
        description: "Call Mom",
        isComplete: false,
        dueDate: new Date("2023-06-26T19:00:00.000Z"),
      },
      {
        id: "4",
        description: "Walk the dog",
        isComplete: false,
        dueDate: null,
      },
      {
        id: "5",
        description: "Feed the cat",
        isComplete: false,
        dueDate: new Date("2025-12-24T15:45:00.000Z"),
      },
      {
        id: "6",
        description: "Run LA marathon",
        isComplete: false,
        dueDate: new Date("2023-03-21T13:30:00.000Z"),
      },
    ];

    const sortedTasks = sortTasks(tasks);

    expect(sortedTasks.map((task) => task.id)).toEqual([
      "6",
      "3",
      "5",
      "4",
      "1",
      "2",
    ]);
  });
});
