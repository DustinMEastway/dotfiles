"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const process_1 = require("process");
const convert = () => {
    var _a, _b;
    const inputPath = (_a = process_1.argv[3]) !== null && _a !== void 0 ? _a : '~/Library/Application Support/Sublime Text/Packages/User/snippets';
    const outputDirectory = (_b = process_1.argv[4]) !== null && _b !== void 0 ? _b : '~/Library/Application Support/Code/User/snippets';
    const nameRegex = /(.*?)\.sublime-snippet$/;
    fs_1.default.readdir(inputPath, (error, files) => {
        if (error) {
            console.error('Error reading file', error);
            return;
        }
        files.forEach((file) => {
            // Check for a sublime snippet
            if (nameRegex.test(file)) {
                // Read in snippet file
                fs_1.default.readFile(file, 'utf-8', (error, data) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                    if (error) {
                        console.error;
                        return;
                    }
                    // Find all the things
                    const name = (_b = (_a = data.match(nameRegex)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
                    const trigger = (_d = (_c = data.match(/<tabTrigger>(.*?)<\/tabTrigger>/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
                    const content = (_f = (_e = data.match(/<content><!\[CDATA\[(.*?)]]><\/content>/s)) === null || _e === void 0 ? void 0 : _e[1].split(/\r?\n/).filter((line) => line.trim() !== "").map((line) => `\n"${line}"`)) !== null && _f !== void 0 ? _f : [];
                    const scope = (_h = (_g = data.match(/<scope>(.*?)<\/scope>/)) === null || _g === void 0 ? void 0 : _g[1]) !== null && _h !== void 0 ? _h : '';
                    const description = (_k = (_j = data.match(/<description>(.*?)<\/description>/)) === null || _j === void 0 ? void 0 : _j[1].split(/\r?\n/)) !== null && _k !== void 0 ? _k : '';
                    // Make conversion
                    const convertedSnippet = `{
                      "${name}": {
                        "prefix": "${trigger}",
                        "body": [${content}\n],
                        "scope": "${scope}",
                        "description": "${description}"
                      }
                    }`;
                    const outputPath = `${outputDirectory}/${name}`;
                    // Create and write to new file 
                    fs_1.default.writeFile(outputPath, convertedSnippet, (error) => {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        console.log('Snippet was succefully converted');
                    });
                });
            }
        });
    });
};
const showHelp = () => {
    console.log(`
  Ussage: snp [COMMAND] [OPTIONS]

  Commands: 
    help              Shows help information
    convert           Converts sublime snippets to vscode snippets

  Options:
    -h, --help        Shows help information

    <Input Directory Path>
      optional, first arg for convert

    <Output Directory Path>
      optional, second arg for convert
  `);
};
const run = () => {
    const command = process.argv[2];
    switch (command) {
        case 'convert':
            convert();
            break;
        case 'help':
        case '--help':
        case '-h':
            showHelp();
            break;
        default:
            console.log(`Unknown command: ${command}`);
            showHelp();
    }
};
run();
