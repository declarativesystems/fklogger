# FKLogger

A simple logger for JavaScript.

## Features

* No dependencies (excluding dev dependencies)
* ES6 native module
* Logs with `process.stdout.write` under node
* Logs with `console` in browser

## Usage

```javascript
import { fklogger as logger, levelWarn } from "fklogger";
logger.level = levelWarn;
logger.tag = "[optional prefix] ";

// outputs nothing
logger.debug("a debug message");

// outputs "[optional prefix] a warning"
logger.warn("a warning");
```
