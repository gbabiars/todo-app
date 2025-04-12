import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Task List/);
});

test("should render tasks", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("list")).toBeVisible();

  const tasks = await page.getByRole("listitem").all();

  expect(tasks).toHaveLength(6);

  await expect(tasks[0]).toContainText("Run LA marathon");
  await expect(tasks[1]).toContainText("Call Mom");
  await expect(tasks[2]).toContainText("Feed the cat");
  await expect(tasks[3]).toContainText("Walk the dog");
  await expect(tasks[4]).toContainText("File 2023 Taxes");
  await expect(tasks[5]).toContainText("Fold laundry");
});

test("should mark a task as complete", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("checkbox", { name: "Run LA marathon" }).click();

  await expect(
    page.getByRole("checkbox", { name: "Run LA marathon" })
  ).toBeChecked();

  await page.getByRole("checkbox", { name: "Run LA marathon" }).click();

  await expect(
    page.getByRole("checkbox", { name: "Run LA marathon" })
  ).not.toBeChecked();
});
