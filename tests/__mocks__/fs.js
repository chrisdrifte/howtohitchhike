"use strict";

const path = require("path");

const fs = jest.createMockFromModule("fs");

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let mockFiles = Object.create(null);
function __setMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const fullPath = path.join(process.cwd(), file);
    const dir = path.dirname(fullPath);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(fullPath));
  }
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
function readdirSync(directoryPath) {
  return mockFiles[directoryPath] || [];
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
function existsSync(pathToCheck) {
  for (const dir in mockFiles) {
    // match directories
    if (dir === pathToCheck) {
      return true;
    }

    // @TODO match files
  }
  return false;
}

fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;
fs.existsSync = existsSync;

module.exports = fs;
