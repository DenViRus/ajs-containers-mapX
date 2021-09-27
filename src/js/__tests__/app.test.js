import { Settings } from "../app.js";

test("check settings", () => {
  const mySettings1 = new Settings();

  const received = mySettings1.getSettingsMap();
  const expected = new Map([
    ["theme", "dark"],
    ["music", "trance"],
    ["difficulty", "easy"],
  ]);

  expect(received).toEqual(expected);
});

test("check change settings", () => {
  const mySettings1 = new Settings();

  const received = mySettings1.getSettingsMap("difficulty", "nightmare");
  const expected = new Map([
    ["theme", "dark"],
    ["music", "trance"],
    ["difficulty", "nightmare"],
  ]);

  expect(received).toEqual(expected);
});

test("check change incorrect settings", () => {
  const mySettings1 = new Settings();

  const received = mySettings1.getSettingsMap("languige", "russian");
  const expected = new Map([
    ["theme", "dark"],
    ["music", "trance"],
    ["difficulty", "easy"],
  ]);

  expect(received).toEqual(expected);
});
