import {
  levelDebug, levelInfo, levelWarn, levelError, levelOff, fklogger,
} from "./index";

beforeEach(async () => {
  // something
});

describe("test suite", () => {
  test("the interface", () => {
    fklogger.debug("debug message");
    fklogger.info("info message");
    fklogger.error("error message");
    fklogger.warn("warn message");
  });

  test("levelOff works", () => {
    fklogger.level = levelOff;
    expect(fklogger.shouldLog(levelDebug)).toBe(false);
    expect(fklogger.shouldLog(levelInfo)).toBe(false);
    expect(fklogger.shouldLog(levelWarn)).toBe(false);
    expect(fklogger.shouldLog(levelError)).toBe(false);
  });

  test("levelDebug works", () => {
    fklogger.level = levelDebug;
    expect(fklogger.shouldLog(levelDebug)).toBe(true);
    expect(fklogger.shouldLog(levelInfo)).toBe(true);
    expect(fklogger.shouldLog(levelWarn)).toBe(true);
    expect(fklogger.shouldLog(levelError)).toBe(true);
  });

  test("levelInfo works", () => {
    fklogger.level = levelInfo;
    expect(fklogger.shouldLog(levelDebug)).toBe(false);
    expect(fklogger.shouldLog(levelInfo)).toBe(true);
    expect(fklogger.shouldLog(levelWarn)).toBe(true);
    expect(fklogger.shouldLog(levelError)).toBe(true);
  });

  test("levelWarn works", () => {
    fklogger.level = levelWarn;
    expect(fklogger.shouldLog(levelDebug)).toBe(false);
    expect(fklogger.shouldLog(levelInfo)).toBe(false);
    expect(fklogger.shouldLog(levelWarn)).toBe(true);
    expect(fklogger.shouldLog(levelError)).toBe(true);
  });

  test("levelError works", () => {
    fklogger.level = levelError;
    expect(fklogger.shouldLog(levelDebug)).toBe(false);
    expect(fklogger.shouldLog(levelInfo)).toBe(false);
    expect(fklogger.shouldLog(levelWarn)).toBe(false);
    expect(fklogger.shouldLog(levelError)).toBe(true);
  });
});
