import fs from 'fs';
import { argv } from 'process';

const convert = () => {
  const inputPath: string = '~/Library/Application\ Support/Sublime\ Text/Packages/User/snippets' ?? argv[3];
  const outputDirectory: string = '~/Library/Application\ Support/Code/User/snippets' ?? argv[4];
  const nameRegex: RegExp = /(.*?)\.sublime-snippet$/;
  
  fs.readdir(inputPath, (error, files)  => {
    if(error) {
      console.error('Error reading file', error);
      return
    }
  
    files.forEach((file) => {
      // Check for a sublime snippet
      if(nameRegex.test(file)) {

        // Read in snippet file
        fs.readFile(file, 'utf-8', (error: NodeJS.ErrnoException | null, data: string): void => {
          if(error) {
            console.error;
            return;
          }
        
          // Find all the things
          const name = data.match(nameRegex)?.[1] ?? '';
          const trigger = data.match(/<tabTrigger>(.*?)<\/tabTrigger>/)?.[1] ?? '';
          const content = data.match(/<content><!\[CDATA\[(.*?)]]><\/content>/s)?.[1]
          .split(/\r?\n/)
          .filter((line) => line.trim() !== "")
          .map((line) => `\n"${line}"`) ?? [];  
          const scope = data.match(/<scope>(.*?)<\/scope>/)?.[1] ?? '';
          const description = data.match(/<description>(.*?)<\/description>/)?.[1].split(/\r?\n/) ?? '';
        
          // Make conversion
          const convertedSnippet: string = `{
            "${name}": {
              "prefix": "${trigger}",
              "body": [${content}\n],
              "scope": "${scope}",
              "description": "${description}"
            }
          }`
  
          const outputPath = `${outputDirectory}/${name}`;
  
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
