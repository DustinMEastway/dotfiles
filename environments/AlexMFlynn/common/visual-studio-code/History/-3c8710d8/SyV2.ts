import { argv } from 'process';
import fs from 'fs';
import os from 'os'
import path from 'path';

const convert = () => {
  const homeDirectory = os.homedir();
  const inputPath: string = argv[3] ?? path.join(homeDirectory, '/Library/Application\ Support/Sublime\ Text/Packages/User/snippets');
  const outputDirectory: string = argv[4] ?? path.join(homeDirectory, '/Library/Application\ Support/Code/User/snippets');
  const nameRegex: RegExp = /(.*?)\.sublime-snippet$/;
  
  fs.readdir(inputPath, (error, files)  => {
    if(error) {
      console.error('Error reading file', error);
      return
    }
  
    files.forEach((file) => {
      // Check for a sublime snippet ext
      if(nameRegex.test(file)) {

        // Read in snippet file
        fs.readFile(path.join(inputPath, file), 'utf-8', (error: NodeJS.ErrnoException | null, data: string): void => {
          if(error) {
            console.error('Error reading from file', error);
            return;
          }
        
          // Find all the things
          const name = file.match(nameRegex)?.[1] ?? '';
          const trigger = data.match(/<tabTrigger>(.*?)<\/tabTrigger>/)?.[1] ?? '';
          const content = data.match(/<content><!\[CDATA\[(.*?)]]><\/content>/s)?.[1]
          .split(/\r?\n/)
          .filter((line) => line.trim() !== "")
          .map((line) => `\n"${line
            .replace(/\t+/g, '')
            .replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"')
          }"`) ?? [];  
          //const scope = data.match(/<scope>(.*?)<\/scope>/)?.[1] ?? '';
          const scope: string = '';
          const description = data.match(/<description>(.*?)<\/description>/)?.[1].split(/\r?\n/) ?? '';
        
          // Make conversion
          const convertedSnippet: string = `{\n\t"${name}": {\n\t\t"prefix": "${trigger}",\n\t\t"body": [${content}\n],\n\t\t"scope": "${scope}",\n\t\t"description": "${description}"\n\t}\n}`
  
          const outputPath = path.join(outputDirectory, `/${name}.code-snippets`);`${outputDirectory}/${name}`;
  
          // Create and write to new file 
          fs.writeFile(outputPath, convertedSnippet, (error): void => {
            if(error) {
              console.error(error);
              return;
            }
            console.log('Snippet was succefully converted');
          });
        });
      }
    });
  });
}

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
  `)
}

const run = () => {
  const command = process.argv[2];

  switch(command) {
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
}

run();
