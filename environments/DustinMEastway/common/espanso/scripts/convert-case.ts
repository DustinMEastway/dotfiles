export enum Case {
  camel = 'camel',
  camelAlias = 'c',
  kebab = 'kebab',
  kebabAlias = 'k',
  pascal = 'pascal',
  pascalAlias = 'p',
  snake = 'snake',
  snakeAlias = 's',
  title = 'title',
  titleAlias = 't'
}

const wordSearch = /([a-z])(?=[A-Z0-9])|([0-9])(?=\D)|[^0-9a-zA-Z]+|([A-Z])(?=[A-Z][a-z])/g;

export function convertCase(
  value: string,
  caseToUse: Case
): string {
  const words = value
    .replace(wordSearch, '$1$2$3 ')
    .trim()
    .split(/\s+/);

  switch (caseToUse) {
    case Case.camel:
    case Case.camelAlias: {
      const pascalCase = convertCase(value, Case.pascal);
      return pascalCase[0].toLowerCase() + pascalCase.slice(1);
    }
    case Case.kebab:
    case Case.kebabAlias:
      return words.join('-').toLocaleLowerCase();
    case Case.pascal:
    case Case.pascalAlias:
      return titleCaseWords(words).join('');
    case Case.snake:
    case Case.snakeAlias:
      return words.join('_').toLocaleLowerCase();
    case Case.title:
    case Case.titleAlias:
      return titleCaseWords(words).join(' ');
    default: {
      const neverCase: never = caseToUse;
      throw new Error(`Invalid case '${neverCase}' provided.`);
    }
  }
}

function titleCaseWords(words: string[]): string[] {
  return words.map((word) => {
    return (word[0] ?? '').toUpperCase() + word.slice(1);
  });
}

const expectedArgs = 2;
(() => {
  if (Deno.args.length !== expectedArgs) {
    throw new Error(`Invalid number of arguments (expected ${expectedArgs}).`);
  }

  const [caseToUse, value] = Deno.args;
  console.log(convertCase(value, caseToUse as Case));
})();
