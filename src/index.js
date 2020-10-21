export const levelDebug = "debug";
export const levelInfo = "info";
export const levelWarn = "warn";
export const levelError = "error";

const levels = {
  [levelDebug]: [levelDebug, levelInfo, levelWarn, levelError],
  [levelInfo]: [levelInfo, levelWarn, levelError],
  [levelWarn]: [levelWarn, levelError],
  [levelError]: [levelError],
};

export const consoleLogger = {
  debug(msg) {
    /* eslint-disable  no-console */
    console.log(msg);
  },
  info(msg) {
    /* eslint-disable  no-console */
    console.info(msg);
  },
  warn(msg) {
    /* eslint-disable  no-console */
    console.warn(msg);
  },
  error(msg) {
    /* eslint-disable  no-console */
    console.error(msg);
  },
};

export const stdoutLogger = {
  debug(msg) {
    process.stdout.write(`[debug] ${msg}\n`);
  },
  info(msg) {
    process.stdout.write(`[info]  ${msg}\n`);
  },
  warn(msg) {
    process.stdout.write(`[warn]  ${msg}\n`);
  },
  error(msg) {
    process.stdout.write(`[error] ${msg}\n`);
  },
};

export const fklogger = {
  level: levelInfo,
  tag: "",
  logger: "JEST_WORKER_ID" in process.env
    ? stdoutLogger : consoleLogger,

  shouldLog(level) {
    return levels[this.level].includes(level);
  },
  debug(msg) {
    if (this.shouldLog(levelDebug)) {
      this.logger.debug(this.tag + msg);
    }
  },
  info(msg) {
    if (this.shouldLog(levelInfo)) {
      this.logger.info(this.tag + msg);
    }
  },
  warn(msg) {
    if (this.shouldLog(levelWarn)) {
      this.logger.warn(this.tag + msg);
    }
  },
  error(msg) {
    if (this.shouldLog(levelError)) {
      this.logger.error(this.tag + msg);
    }
  },
};
