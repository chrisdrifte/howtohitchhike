"use strict";

const path = require("path");

const fs = jest.createMockFromModule("fs");

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let mockFiles = Object.create(null);
let mockFilesContent = Object.create(null);
function __setMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const fullPath = path.join(process.cwd(), file);
    const dir = path.dirname(fullPath);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(fullPath));
    mockFilesContent[fullPath] = newMockFiles[file];
  }
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
function readdirSync(directoryPath) {
  return mockFiles[directoryPath] || [];
}

// A custom version of `readFileSync` that reads from the special mocked out
// file list set via __setMockFiles
function readFileSync(filePath) {
  if (!mockFilesContent[filePath]) {
    throw new Error(`Mocked file doesn't exist`);
  }
  return mockFilesContent[filePath];
}

// A custom version of `existsSync` that reads from the special mocked out
// file list set via __setMockFiles
function existsSync(pathToCheck) {
  let dirToCheck = path.dirname(pathToCheck);
  let fileToCheck = path.basename(pathToCheck);

  // if file doesn't contain an extension, treat as directory
  if (!fileToCheck.includes(".")) {
    dirToCheck += `/${fileToCheck}`;
    fileToCheck = "";
  }

  const dirs = Object.keys(mockFiles);
  const directoryExists = dirs.includes(dirToCheck);

  // if directory doesn't exist, path doesn't exist
  if (!directoryExists) {
    return false;
  }

  // if directory doesn't exist, and no file in path, path exists
  if (!fileToCheck) {
    return true;
  }

  // if directory exists, and file in path, check for file
  const files = mockFiles[dirToCheck];
  const fileExists = files.includes(fileToCheck);
  return fileExists;
}

fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;
fs.readFileSync = readFileSync;
fs.existsSync = existsSync;

fs.promises = {
  readdir: async (...args) => readdirSync(...args),
  readFile: async (...args) => readFileSync(...args),
};

module.exports = fs;
