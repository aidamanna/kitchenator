import { getDayOfWeek, getMonthAndDay } from "../src/dateFormatter";

describe("Get day of week", () => {
  it("gets the name of the day of the week", () => {
    const date = new Date("2021-04-05").toISOString();

    expect(getDayOfWeek(date)).toBe("lunes");
  });
});

describe("Get month and day", () => {
  it("gets the day of the month and the name of the month", () => {
    const date = new Date("2021-04-05").toISOString();

    expect(getMonthAndDay(date)).toBe("5 Abril");
  });
});
